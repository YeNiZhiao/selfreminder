var d = new Date();
console.log(d)
var month = d.getMonth();
var date = d.getDate();
console.log(month)
var textMonth = "";
if (month == 0) {
    textMonth = "Januari";
} else if (month == 1) {
    textMonth = "Februari";
} else if (month == 2) {
    textMonth = "Maret";
} else if (month == 3) {
    textMonth = "April";
} else if (month == 4) {
    textMonth = "Mei";
} else if (month == 5) {
    textMonth = "Juni";
} else if (month == 6) {
    textMonth = "Juli";
} else if (month == 7) {
    textMonth = "Agustus";
} else if (month == 8) {
    textMonth = "September";
} else if (month == 9) {
    textMonth = "Oktober";
} else if (month == 10) {
    textMonth = "November";
} else if (month == 11) {
    textMonth = "Desember";
}
var year = d.getFullYear();
var waktu = date + ' ' + textMonth + " " + year;
$(".waktu").val(String(waktu));
console.log(month)
console.log(date + '-' + textMonth + "-" + year)
$(".tambah").on("click", function () {
    $(".form").toggleClass("show");
})

// close
$(".close").on("click", function () {
    $(".form").toggleClass("show");
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxBh1zISCKLbuPqyl6p2f2wuXULSHIrr2mju8nF918g7kVh16_M9G5GLGMO6__bqQ/exec'
const form = document.forms['pesan']
const alert = document.querySelector('.alert');
form.addEventListener('submit', e => {
    $(".kirim").html("Mengirim...")
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Ketika tombol submit diklik
            // tampilkan tombol loading, hilangkan  tombol kirim
            $(".kirim").html("Kirim")
            // reset form
            form.reset();
            // default
            // Menampilkan data google sheet
            const url = "https://script.google.com/macros/s/AKfycbzMw1KM_8Ip8g0667hO8LnAmY5_JUHLsfaRq7AkIWmKOhequOZbPlSTrOAuz9C3MwXY/exec";
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // default
                    $(".utama").empty();
                    console.log(data)
                    if (data.length > 50) {
                        for (let i = data.length - 1; i >= data.length - 50; i--) {
                            console.log(data[i]);
                            $(".utama").append(`<div
                            class="p-2 shadow-md w-full md:w-96 relative rounded-lg cursor-pointer bg-secondary flex align-middle items-center justify-center flex-col h-72 hover:shadow-xl transition-all duration-100 hover:-translate-y-2 box-border my-5 mx-0.5">
                            
                            <p class="text-text font-thin my-1 rounded text-lg font-indie text-center">
                                " ${data[i].pesan} "
                            </p>
                            <div class="absolute bottom-3">
                            <p class="text-sm text-slate-900 font-thin text-center font-patrick my-1">${data[i].nama}</p>
                            <p class="text-sm text-slate-900 my-1 font-patrick text-center">${data[i].waktu}</p>
                           </div>
                       </div>`)
                        }
                    } else if (data.length < 50) {
                        for (let i = data.length - 1; i >= 0; i--) {
                            console.log(data[i]);
                            // $(".utama").empty();
                            $(".utama").append(`<div
                             class="p-2 shadow-md w-full md:w-96 relative rounded-lg cursor-pointer bg-secondary flex align-middle items-center justify-center flex-col h-72 hover:shadow-xl transition-all duration-100 hover:-translate-y-2 box-border my-5 mx-0.5">
                             
                             <p class="text-text font-thin my-1 rounded text-lg font-indie text-center">
                                " ${data[i].pesan} "
                             </p>
                             <div class="absolute bottom-3">
                             <p class="text-sm text-slate-900 font-thin text-center font-patrick my-1">${data[i].nama}</p>
                             <p class="text-sm text-slate-900 my-1 font-patrick text-center">${data[i].waktu}</p>
                            </div>
                        </div>`)
                        }
                    }

                    console.log('Success!', response)
                    $(".form").toggleClass("show");
                    $(".alert").toggleClass("flex");
                    $(".alert").toggleClass("hidden");

                })

                .catch(error => console.error('Error!', error.message))
        })

    $(".tutup").on("click", function () {
        $(".alert").toggleClass("flex");
        $(".alert").toggleClass("hidden");
    })

    // tampilkan


})

// Menampilkan data google sheet
const url = "https://script.google.com/macros/s/AKfycbzMw1KM_8Ip8g0667hO8LnAmY5_JUHLsfaRq7AkIWmKOhequOZbPlSTrOAuz9C3MwXY/exec";
const ssid = "11yjV_2lj9w6BXF1AlcEESCK9odZvEzo2-S4vKZEHoOk";
fetch(url)
    .then(res => res.json())
    .then(data => {
        // default
        $(".utama").empty();
        console.log(data)
        if (data.length > 50) {
            for (let i = data.length - 1; i >= data.length - 50; i--) {
                console.log(data[i]);
                $(".utama").append(`<div
                class="p-2 shadow-md w-full md:w-96 relative rounded-lg cursor-pointer bg-secondary flex align-middle items-center justify-center flex-col h-72 hover:shadow-xl transition-all duration-100 hover:-translate-y-2 box-border my-5 mx-0.5">
                
                <p class="text-text font-thin my-1 rounded text-lg font-indie text-center">
                    " ${data[i].pesan} "
                </p>
                <div class="absolute bottom-3">
                <p class="text-sm text-slate-900 font-thin text-center font-patrick my-1">${data[i].nama}</p>
                <p class="text-sm text-slate-900 my-1 font-patrick text-center">${data[i].waktu}</p>
               </div>
           </div>`)
            }
        } else if (data.length < 50) {
            for (let i = data.length - 1; i >= 0; i--) {
                console.log(data[i]);
                // $(".utama").empty();
                $(".utama").append(`<div
                 class="p-2 shadow-md w-full md:w-96 relative rounded-lg cursor-pointer bg-secondary flex align-middle items-center justify-center flex-col h-72 hover:shadow-xl transition-all duration-100 hover:-translate-y-2 box-border my-5 mx-0.5">
                 
                 <p class="text-text font-thin my-1 rounded text-lg font-indie text-center">
                     " ${data[i].pesan} "
                 </p>
                 <div class="absolute bottom-3">
                 <p class="text-sm text-slate-900 font-thin text-center font-patrick my-1">${data[i].nama}</p>
                 <p class="text-sm text-slate-900 my-1 font-patrick text-center">${data[i].waktu}</p>
                </div>
            </div>`)
            }
        }

    })