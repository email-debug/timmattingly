$gsutil = 'C:\Users\timma\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gsutil.cmd'
& $gsutil cp "website\public\images\logos\berg.jpg" "gs://timmattingly-assets/logos/berg.jpg"
Write-Host "Uploaded"
