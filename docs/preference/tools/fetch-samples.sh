#!/bin/bash
# Downloads the Dribbble reference shots listed in docs/preference/README.md
# into docs/preference/samples/ (gitignored). These are other designers' work:
# keep them local, use them for reference only, never publish or commit them.
#
# usage: bash docs/preference/tools/fetch-samples.sh
set -e
OUT="$(cd "$(dirname "$0")/.." && pwd)/samples"
mkdir -p "$OUT"
B="https://cdn.dribbble.com/userupload"
Q="?resize=1600x1200&vertical=center"

get() {
  curl -sfL -o "$OUT/$1.src" "$B/$2$Q"
  sips -s format jpeg -s formatOptions 85 "$OUT/$1.src" --out "$OUT/$1.jpg" >/dev/null
  rm "$OUT/$1.src"
  echo "saved samples/$1.jpg"
}

get knaub           31350777/file/original-cd34639138ce12ad793f03a0e3552c5f.png
get luxury-property 48407173/file/24b01d18b9204fe83798494cdf6700ec.png
get taraq           48656686/file/994367e7f6c4de3f9b17b959536e4ee5.jpg
get aerium          46534693/file/f637a970248b18f65c7f300c6fa038d1.jpeg
get auto-sharks     48232030/file/7cc91edf53a3f199b6d15aba3153ef33.png
get tickettool      48231961/file/7525e3ac680638dd59e8c672e44a0c96.png
get charity         48231995/file/2fc8298fdde56fc359739cbf8a0b30a8.png
get kaiikit         3380573/file/original-7b0d24855beb07d924979f8f57ca384e.png
get finora          49003348/file/8473753d676bd1502843b1cd90e94013.png
get careora         44167506/file/baed884059324541610acf16f9a4ac98.png
get unseen          4292591/file/still-cbce8cb6ad0f6a0a6630d879c2825fba.png
get taskflow        49003565/file/af303fb92b4677f3cf58ef5be51def5d.png
