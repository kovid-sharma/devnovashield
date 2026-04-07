import { readdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const ALLOWED_FOLDERS = new Set(["fynX", "pettoo", "equinox"]);
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif", ".svg"]);

async function resolveAssetDirectory(folder: string) {
    const candidateDirectories = [
        path.join(process.cwd(), "assets", folder),
        path.join(process.cwd(), "public", "assets", folder),
    ];

    for (const directory of candidateDirectories) {
        try {
            const files = await readdir(directory, { withFileTypes: true });
            return { directory, files };
        } catch {
            continue;
        }
    }

    return null;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder");

    if (!folder || !ALLOWED_FOLDERS.has(folder)) {
        return NextResponse.json({ images: [] }, { status: 200 });
    }

    const assetDirectory = await resolveAssetDirectory(folder);
    if (!assetDirectory) {
        return NextResponse.json({ images: [] }, { status: 200 });
    }

    const images = assetDirectory.files
        .filter((entry) => {
            if (!entry.isFile()) {
                return false;
            }

            const extension = path.extname(entry.name).toLowerCase();
            return IMAGE_EXTENSIONS.has(extension);
        })
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
        .map((file) => `/api/portfolio-image/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`);

    return NextResponse.json({ images });
}
