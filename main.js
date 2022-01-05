var app = new Vue({
    el: "#app",
    data : {        
        buku : [],
        judul : '',
        pengarang : '',
        tahun_terbit : '',
        penerbit : ''         
    },    
    methods: {        
        simpan : function() {
            this.buku.push({
                judul : this.judul,
                pengarang : this.pengarang,
                tahun_terbit : this.tahun_terbit,
                penerbit : this.penerbit
            });

            this.judul = ''
            this.pengarang = ''
            this.tahun_terbit = ''
            this.penerbit = ''

            console.log(JSON.stringify(this.buku))
        },
        hapus: function(index) {
            this.buku.splice(index, 1);
        },
    }
})

