function subscribe() {
    const subscriptionStatus = document.getElementById('subscription-status');
    subscriptionStatus.textContent = 'Anda telah berlangganan!';
    subscriptionStatus.style.color = 'green';
}

function payWithDANA() {
    // Konfigurasi DANA
    const appId = 'YOUR_APP_ID';
    const redirectUrl = 'https:                        
    const notifyUrl = '//example.com/callback';
    const notifyUrl = 'https://example.com/notify';
    const orderNo = 'ORDER_NO_' + Math.floor(Math.random() * 1000000);
    const amount = 10000; // Rp 100.000
    const sign = 'YOUR_SIGNATURE';

    // Buat URL pembayaran DANA
    const url = `https://pay.danapay.id/v1.0/gateway?appId=${appId}&redirectUrl=${redirectUrl}&notifyUrl=${notifyUrl}&orderNo=${orderNo}&amount=${amount}&sign=${sign}`;

    // Redirect ke halaman pembayaran DANA
    window.location.href = url;
}
