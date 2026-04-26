$gsutil = 'C:\Users\timma\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gsutil.cmd'
& $gsutil cp "website\public\images\logos\Equilliance-web.png" "gs://timmattingly-assets/logos/Equilliance-web.png"
Write-Host "Uploaded"
