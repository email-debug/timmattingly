$gsutil = 'C:\Users\timma\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gsutil.cmd'
$files = @('hs-olympics.jpg', 'hs-dolomites.jpg', 'hs-iceland.jpg', 'hs-bear.jpg')
foreach ($f in $files) {
    & $gsutil cp "website\public\images\headshots\$f" "gs://timmattingly-assets/headshots/$f"
    Write-Host "Uploaded $f"
}
