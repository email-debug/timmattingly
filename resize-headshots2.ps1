Add-Type -AssemblyName System.Drawing

$files = @(
    @{ src = "website\public\images\headshots\20210301_122133.jpg"; dst = "website\public\images\headshots\hs-skiing.jpg" },
    @{ src = "website\public\images\headshots\20250618_084555.jpg"; dst = "website\public\images\headshots\hs-hlth.jpg" },
    @{ src = "website\public\images\headshots\20250612_121458.jpg"; dst = "website\public\images\headshots\hs-alps.jpg" }
)

$maxLong = 1200

foreach ($f in $files) {
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $f.src))
    $w = $img.Width
    $h = $img.Height
    $long = [math]::Max($w, $h)
    $scale = $maxLong / $long
    $newW = [int]($w * $scale)
    $newH = [int]($h * $scale)

    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newW, $newH)
    $g.Dispose()

    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)

    $bmp.Save((Join-Path (Get-Location) $f.dst), $enc, $params)
    $img.Dispose()
    $bmp.Dispose()

    $size = [math]::Round((Get-Item $f.dst).Length / 1KB)
    Write-Host "Done: $($f.dst) - ${newW}x${newH} - ${size}KB"
}
