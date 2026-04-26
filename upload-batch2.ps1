$gsutil = 'C:\Users\timma\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gsutil.cmd'

$headshots = @('hs-skiing.jpg', 'hs-hlth.jpg', 'hs-alps.jpg')
foreach ($f in $headshots) {
    & $gsutil cp "website\public\images\headshots\$f" "gs://timmattingly-assets/headshots/$f"
    Write-Host "Uploaded headshots/$f"
}

& $gsutil cp "website\public\images\logos\EquillianceLogo.jpg" "gs://timmattingly-assets/logos/EquillianceLogo.jpg"
Write-Host "Uploaded logos/EquillianceLogo.jpg"
