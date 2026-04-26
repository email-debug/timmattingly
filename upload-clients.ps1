$gsutil = 'C:\Users\timma\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gsutil.cmd'
$src = 'C:\Users\timma\stp\TimCo\website\public\images\logos\clients'
$dst = 'gs://timmattingly-assets/logos/clients'

& $gsutil cp "$src\1716398164644.jpg" "$dst/sayvant.jpg"
& $gsutil cp "$src\62b615_9624d532c6f64701aed2a47fad102a8d~mv2.png" "$dst/pragmaclin.png"
& $gsutil cp "$src\CergenXLogo.png" "$dst/cergenx.png"
& $gsutil cp "$src\FA__ayble_health_Logo_Isabelline.png" "$dst/ayble-health.png"
& $gsutil cp "$src\GT-Diagnostics-LogoLarge-e1677764202434-1024x336.png" "$dst/gt-diagnostics.png"
& $gsutil cp "$src\images.jpg" "$dst/manus-neuro.jpg"
& $gsutil cp "$src\Incision-logo-with-slogan.png" "$dst/incision.png"
& $gsutil cp "$src\pulsenmore.png" "$dst/pulsenmore.png"
& $gsutil cp "$src\SS_Color_Logo.jpg" "$dst/sober-sidekick.jpg"
Write-Host "Done"
