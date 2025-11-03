#!/usr/bin/env bash
set -euo pipefail

if ! command -v tar >/dev/null 2>&1; then
	echo "tar command not found" >&2
	exit 1
fi

root_dir="$(pwd)"

for project_dir in */ ; do
	[ -d "$project_dir" ] || continue
	if [ ! -f "${project_dir}package.json" ]; then
		continue
	fi

	echo "Building ${project_dir%/}"
	(
		cd "$project_dir"
		npm run build

		if [ ! -d dist ]; then
			echo "dist directory is missing in ${project_dir%/}" >&2
			exit 1
		fi

		archive_path="${root_dir}/${project_dir%/}.tar.gz"
		rm -f "$archive_path"
		tar -czf "$archive_path" -C dist .
	)
done
