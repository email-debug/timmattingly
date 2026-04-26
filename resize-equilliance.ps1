Add-Type -AssemblyName System.Drawing

$src = "website\public\images\logos\Equilliance.png"
$dst = "website\public\images\logos\Equilliance-web.png"
$maxW = 600

$img = [System.Drawing.Image]::FromFile((Resolve-Path $src))
$w = $img.Width
$h = $img.Height
$scale = $maxW / $w
$newW = [int]($w * $scale)
$newH = [int]($h * $scale)

$bmp = New-Object System.Drawing.Bitmap($newW, $newH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $newW, $newH)
$g.Dispose()

$bmp.Save((Join-Path (Get-Location) $dst), [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()

$size = [math]::Round((Get-Item $dst).Length / 1KB)
Write-Host "Done: $dst - ${newW}x${newH} - ${size}KB"
