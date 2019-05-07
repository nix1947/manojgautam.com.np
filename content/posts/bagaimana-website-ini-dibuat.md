---
date: 2019-05-08T03:46:07+07:00
title: Bagaimana Website ini dibuat
template: post
thumbnail: "../uploads/gatsby.png"
slug: bagaimana-website-ini-dibuat
categories:
- Programming
tags:
- gatsby
- wordpress

---
**Bagaimana Website ini dibuat**

Website ini sebelumnya menggunakan WordPress, lalu bermigrasi ke Gatsby, framework open-source untuk membuat website statis. Sebenarnya ada banyak [framework untuk membuat website statis](https://www.staticgen.com/) seperti Jekyll, Hugo, Next, dan Hexo. Tapi disini saya memilih Gatsby dengan beberapa faktor:

* No Page Reload – Tidak membutuhkan waktu lama untuk memuat sebuah halaman
* Image Optimization – Semua gambar yang ada diwebsite ini secara otomatis akan dioptimalkan, diperkecil ukurannya, dan dikompres
* Pre-fetch resources – Gatsby akan mendeteksi semua tautan yang tersedia pada halaman tertentu dan memuatnya ke dalam cache
* Bundling dan Minification – Kode yang kita buat juga akan diperkecil dan di-bundle ketika dimuat
* Menggunakan server-side ketika kita membangun/membuild
* Dapat mengedit artikel yang saya tulis melalui GitHub, ini sangat membantu saya ketika kalian menemukan kesahalan penulisan atau apapun dan mengeditnya.
* Ketika saya mempush perubahan ke repo, maka otomatis website ini akan diupdate.

Sebelum bermigrasi, saya harus membackup semua artikel yang pernah saya tulis menggunakan [ExitWP](https://github.com/thomasf/exitwp), untuk masalah hosting sendiri saya memakai service gratisan dari [Netlify](https://www.netlify.com/) dan untuk memudahkan saya memposting artikel baru, saya memakai bantuan service CMS Static dari [Forestry](https://forestry.io/).