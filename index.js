const warga=[
	{a:'A3-27', b:'IMAM SYAHRONI'},
	{a:'C3-12', b:'TUTUG S.'},
	{a:'C3-14', b:'HERRY EFFENDI'},
	{a:'C5-14', b:'HERU SETIAWAN'},
	{a:'C5-07', b:'AGUS SUTOMO'},
	{a:'A3-11', b:'MARULI'},
	{a:'A3-25', b:'NANANG S.B.'},
	{a:'A3-15', b:'IRAWAN Y.'},
	{a:'C4-07', b:'SAID AMIR'},
	{a:'C3-16', b:'M. SOKIB'},
	{a:'C3-15', b:'ANDRA'},
	{a:'C5-01', b:'YUDI SETIAWAN'},
	{a:'C5-16', b:'KUSNO'},
	{a:'C3-19', b:'SUWITO'},
	{a:'A3-18', b:'WARKOP'},
	{a:'C3-11', b:'MEIRIL ISA'},
	{a:'C5-03', b:'GATOT P.'},
	{a:'C5-10', b:'RIYANTO'},
	{a:'C5-02', b:'SUHADI'},
	{a:'C4-01', b:'SHOLEH'},
	{a:'C3-18', b:'ARIS PRIAMBODO'},
	{a:'A3-16', b:'AGUSTIAN (Toko EB)'},
	{a:'A3-12', b:'DWI H. ERWANTO'},
	{a:'A3-17', b:'MULYANTO'},
	{a:'C5-15', b:'AMRI M.'},
	{a:'C4-02', b:'M. MUNIR'},
	{a:'C4-03', b:'YUDI ARIFIN'},
	{a:'C5-08', b:'WAHID'},
	{a:'C4-09', b:'AGUS MIMIN'},
	{a:'A3-10', b:'TOKO KARUNIA'},
	{a:'A3-28', b:'PURNOMO'},
	{a:'C3-17', b:'YULIANTO'},
	{a:'C5-06', b:'JUNAIDI'},
	{a:'C4-04', b:'KELVIN'},
	{a:'C3-21', b:'JOKO (Kos2an)'},
	{a:'A3-14', b:'RAHMAN (Parfum)'},
]

const viewWarga=a=>{
	while (a.children.length>2) a.removeChild(a.children[2])
	warga.forEach((b,c)=>{
		const d=(c%2?'background:#eefaff;':'background:#eefffa;')+'border-radius:1vmin; padding:1.5vmin 3vmin;'
		el({a:'div', b:a, c:b.b, d:{style:d}})
		el({a:'div', b:a, c:b.a, d:{style:d}})
	})
	el({a:'div', b:a, c:'a', d:{style:'background:rgba(0,0,0,0); color:rgba(0,0,0,0); padding:5vmin 0; margin:5vmin 0;'}})
	el({a:'div', b:a, c:'a', d:{style:'background:rgba(0,0,0,0); color:rgba(0,0,0,0); padding:5vmin 0; margin:5vmin 0;'}})
}

const daftarWarga=()=>{
	const a=el({a:'div', b: document.body, d:{style:'position:fixed; top:0; left:0; width:100vw; height:100vh; overflow-y:scroll; background:white; padding:3vmin; display:grid; grid-template-columns:1fr min-content; gap:3px; align-content:start;'}, e:{click:a=>{a.stopPropagation()}}})
	const b=el({a:'div', b:a, d:{style:'background:#abc; border-radius:1vmin; padding:3vmin; position:sticky; top:-3vmin; display:flex; gap:1vmin;'}})
	el({a:'div', b:b, c:'NAMA', d:{style:'flex:1; font-weight:bold; text-align:center;'}})
	el({a:'div', b:b, c:'\u25AC', d:{style:'padding:0 5px; pointer:default;'}, e:{click:a=>{
		if (a.target.textContent=='\u25BC') {
			a.target.textContent='\u25B2'
			warga.sort((a,b)=>b.b.localeCompare(a.b))
			viewWarga(a.target.parentElement.parentElement)
		} else {
			a.target.textContent='\u25BC'
			warga.sort((a,b)=>a.b.localeCompare(b.b))
			viewWarga(a.target.parentElement.parentElement)
		}
		a.target.parentElement.nextElementSibling.children[1].textContent='\u25AC'
	}}})
	
	const c=el({a:'div', b:a, d:{style:'background:#abc; border-radius:1vmin; padding:3vmin; position:sticky; top:-3vmin; display:flex; gap:1vmin;'}})
	el({a:'div', b:c, c:'ALAMAT', d:{style:'flex:1; font-weight:bold; text-align:center;'}})
	el({a:'div', b:c, c:'\u25AC', d:{style:'padding:0 5px; pointer:default;'}, e:{click:a=>{
		if (a.target.textContent=='\u25BC') {
			a.target.textContent='\u25B2'
			warga.sort((a,b)=>b.a.localeCompare(a.a))
			viewWarga(a.target.parentElement.parentElement)
		} else {
			a.target.textContent='\u25BC'
			warga.sort((a,b)=>a.a.localeCompare(b.a))
			viewWarga(a.target.parentElement.parentElement)
		}
		a.target.parentElement.previousElementSibling.children[1].textContent='\u25AC'
	}}})
	
	viewWarga(a)
	const d=el({a:'div', b: document.body, d:{style:'position:fixed; bottom:0; left:0; width:100vw; background:white; padding:3vmin; display:flex; align-items:center; justify-content:center;'}, e:{click:a=>{a.stopPropagation()}}})
	el({a:'button', b:d, c:'Kembali', e:{click:a=>{document.body.removeChild(a.target.parentElement.previousElementSibling);document.body.removeChild(a.target.parentElement)}}})
}

const bln=['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const pilihHari=()=>{
	const a=el({a:'div', b: document.body, d:{style:'position:fixed; top:0; left:0; width:100vw; min-height:100vh; background:white; padding:3vmin; display:grid; grid-template-columns:min-content 1fr; gap:3vmin 1vmin; align-content:start;'}, e:{click:a=>{a.stopPropagation()}}})
	el({a:'div', b:a, c:'Tanggal Mulai'})
	const b=el({a:'optgroup',b:el({a:'select', b:a}),d:{label:'Pilih Tanggal'}});
	(()=>{
		const a=(a=>new Date(a.getFullYear(), a.getMonth(), a.getDate()-a.getDay()-29))(new Date())
		const c=(a=>new Date(a.getFullYear(), a.getMonth(), 69+a.getDate()-a.getDay()))(new Date())
		while (a<c) {
			const d='Sabtu  '+a.getDate()+'  '+bln[a.getMonth()]+'  '+a.getFullYear()
			el({a:'option', b:b, c:d, d:{value:d}})
			a.setDate(a.getDate()+7)
		}
		b.parentElement.selectedIndex=5
	})()
	
	el({a:'div', b:a, c:'Jumlah Grup'})
	el({a:'input', b:a, d:{type:'number', size:5, style:'padding-left:1vmin;', value:6}})
	el({a:'div', b:a})
	el({a:'button', b:a, c:'Lanjut', e:{click:a=>{
		const b=(a=>{a=new Date(a[6], bln.indexOf(a[4]), a[2]); return {b:a.getMonth(), d:a.getDate(), t:a.getFullYear()}} )(a.target.parentElement.children[1].value.split(' '));
		hasil({a:parseInt(a.target.parentElement.children[3].value)||6, ...b})
	}}})
	el({a:'div', b:a})
	el({a:'button', b:a, c:'Kembali', e:{click:a=>{document.body.removeChild(a.target.parentElement)}}})
}

const data=[]
const lama=[]
const gambar=()=>{
	const b=el({a:'div', b:el({a:'div', b:el({a:'div', b:document.body, d:{style:'position:fixed; top:0; left:0; width:100vw; height:100vh; display:flex; overflow:scroll; background:black;'}})}), d:{style:'background:white; width:1191px; height:842px; display:flex; flex-direction:column; gap:1px; justify-content: center; align-items:center;'}})
	const style1={style:'font: bold 15px Arial;'}
	el({a:'div', b:b, c:'DAFTAR JAGA POS KAMLING RT 07 / RW 04 PERUMTAS III', d:style1})
	el({a:'div', b:b, c:'Desa POPOH Kec. WONOAYU Kab. SIDOARJO', d:style1})
	el({a:'div', b:b, c:'Nomer :      / TAS III / RT 07 /   / ' +new Date().getFullYear(), d:{style:style1.style+'white-space:pre;'}})
	el({a:'div', b:b, d:{style:'height:30px;'}})
	
	const c=el({a:'div', b:b, d:{style:'width:1111px; background:black; display:grid; grid-template-columns:repeat('+data.length+',min-content min-content auto); gap:1px; padding:1px;'}});
	
	const style2={style:'font:11px Times; padding:3px;'};
	(()=>{
		const b={style:'background:white; display:flex; flex-direction:column; justify-content:center; align-items:center;'}
		data.forEach(a=>{
			el({a:'div', b:el({a:'div', b:el({a:'div', b:c, d:b}), c:'GRUP', d:style2}).parentElement, c:a.a, d:style2})
			el({a:'div', b:el({a:'div', b:el({a:'div', b:c, d:b}), c:'Hari', d:style2}).parentElement, c:'Sabtu', d:style2})
			el({a:'div', b:el({a:'div', b:el({a:'div', b:el({a:'div', b:c, d:b}), c:a.b[0], d:style2}).parentElement, c:a.b[1], d:style2}).parentElement, c:a.b[2], d:style2})
		})
	})()
	
	const style3='font:11px Times; background:white; display:flex; align-items:center;'
	data[0].c.forEach((a,b)=>{
		data.forEach(a=>{
			el({a:'div', b:c, c:b+1, d:{style:style3 + 'justify-content:center;'}})
			el({a:'div', b:c, c:a.c[b]?a.c[b].a:'', d:{style:style3 + 'justify-content:center; padding:3px;'}})
			el({a:'div', b:c, c:a.c[b]?a.c[b].b:'', d:{style:style3 + 'padding:3px 3px 3px 5px;'}})
		})
	})
	
	el({a:'div', b:c, c:'KOORDINATOR DAN KONSUMSI', d:{style:'grid-column:1/span '+(data.length*3)+'; background:white; font: bold 12px Arial; padding-top:20px; text-align:center;'}})
	data[0].c.forEach((a,b)=>{
		b<3&&data.forEach(a=>{
			el({a:'div', b:c, c:b+1, d:{style:style3 + 'justify-content:center;'}})
			el({a:'div', b:c, c:a.c[b]?a.c[b].a:'', d:{style:style3 + 'justify-content:center; padding:3px;'}})
			el({a:'div', b:c, c:a.c[b]?a.c[b].b:'', d:{style:style3 + 'padding:3px 3px 3px 5px;'}})
		})
	})
	
	el({a:'div', b:b, d:{style:'height:20px;'}})
	const style4={style:'font:bold 9px Arial; align-self:start; padding-left:60px; white-space:pre;'}
	el({a:'div', b:b, c:'\u27A2     DIMOHON KESADARANNYA JIKA ANDA MASIH MERASA MENJADI BAGIAN DARI WARGA RT 07, UNTUK AGA DI POS RT 07 MULAI JAM 22.00 S/D 01.00 WIB', d:style4})
	el({a:'div', b:b, c:'\u27A2     BAGI WARGA YANG BERHALANGAN / TIDAK HADIR DIMOHON KOORDINASI DENGAN PENGURUS RT / KETUA GRUP', d:style4})
	el({a:'div', b:b, c:'\u27A2     ATAU SESAMA WARGA YANG LAIN, UNTUK TUKAR JAGA MINGGU SEBELUMNYA / MINGGU BERIKUTNYA', d:style4})
	el({a:'div', b:b, c:'\u27A2     MARI BERSAMA JADIKAN LINGKUNGAN TEMPAT TINGGAL KITA AMAN, DAMAI, TENTRAM, BERSIH & INDAH', d:style4})
	el({a:'div', b:b, c:'\u27A2     PETUGAS JAGA BERTANGGUNG JAWAB TERHADAP KEBERADAAN UANG JIMPITAN & MENGISI BUKU HADIR', d:style4})
	el({a:'div', b:b, c:'\u27A2     BILA TIDAK HADIR 2 KALI PERTEMUAN & TIDAK ADA KETERANGAN, AKAN DIKENAKAN DENDA Rp. 30.000,-', d:style4})
	el({a:'div', b:b, d:{style:'height:20px;'}})
	el({a:'div', b:b, c:'        Wonoayu, '+(a=>(a.getDate()<10?'0':'')+a.getDate()+' '+bln[a.getMonth()]+' '+a.getFullYear())(new Date()), d:{style:style4.style+'font:bold 10px Times;'}})
	el({a:'div', b:b, c:'        Mengetahui,', d:{style:style4.style+'font:bold 10px Times;'}})
	
	const d=el({a:'div', b:b, d:{style:'width:900px; display:flex; padding-top:10px;'}})
	el({a:'div', b:d, d:{style:'display:flex; flex-direction:column; gap:50px; align-items:center;'}})
	el({a:'div', b:d, d:{style:'display:flex; flex-direction:column; gap:50px; align-items:center; padding-left:500px;'}})
	el({a:'div', b:d.children[0], c:'KETUA RT 07', d:{style:'font:bold 10px Arial;'}})
	el({a:'div', b:d.children[0], c:'( Agus Sutomo )', d:{style:'font:bold 10px Times; white-space:pre;'}})
	el({a:'div', b:d.children[1], c:'SIE KEAMANAN', d:{style:'font:bold 10px Arial;'}})
	el({a:'div', b:d.children[1], c:'( Gatot P. )', d:{style:'font:bold 10px Times; white-space:pre;'}})
	
	new jspdf.jsPDF('l', 'pt', [842, 1191]).html(b, { callback: doc=>{ doc.save('JAGA-RT07-'+((a=>bln[a.getMonth()]+'-'+a.getFullYear())(new Date()))+'.pdf') } })
	html2canvas(b, {
		allowTaint: true,
		height: b.height,
		windowHeight: b.height,
		width: b.width,
		windowWidth: b.width,
	}).then(a=>{
		el({a:'a', b:document.body, d:{
			download:'JAGA-RT07-'+((a=>bln[a.getMonth()]+'-'+a.getFullYear())(new Date()))+'.png',
			href: a.toDataURL('image/png').replace(/^data:image\/png/,'data:application/octet-stream')
		}, e:{click:a=>{document.body.removeChild(a.target)}}}).click()
	});
}

const hasil=a=>{
	const b=el({a:'div', b:document.body, d:{style:'position:fixed; top:0; left:0; width:100vw; height:100vh; overflow-y:scroll; background:white; padding:3vmin; display:grid; grid-template-columns:min-content min-content 1fr; gap:3px; align-content:start;'}, e:{click:a=>{a.stopPropagation()}}})
	a.a<2&&(a.a=6)
	a.c=a.a*7
	data.length>0&&data.splice(0,data.length)
	while (a.a>0) {
		a.a--
		const e=(a=>(a.getDate()<10?'0':'')+a.getDate()+'-'+(a.getMonth()<10?'0':'')+(a.getMonth()+1)+'-'+a.getFullYear())(new Date(a.t, a.b, a.d+(a.a*7)))
		const f=(a=>(a.getDate()<10?'0':'')+a.getDate()+'-'+(a.getMonth()<10?'0':'')+(a.getMonth()+1)+'-'+a.getFullYear())(new Date(a.t, a.b, a.d+a.c+(a.a*7)))
		const g=(a=>(a.getDate()<10?'0':'')+a.getDate()+'-'+(a.getMonth()<10?'0':'')+(a.getMonth()+1)+'-'+a.getFullYear())(new Date(a.t, a.b, a.d+2*a.c+(a.a*7)))
		data[a.a]={a:String.fromCharCode(65+a.a), b:[e,f,g], c:[]}
	}
	const w=[...warga]
	lama.forEach(a=>{
		a.c.forEach((a,b)=>{
			if (b<3) {
				const c=w.findIndex(b=>b.a==a.a&&b.b==a.b)
				c>-1&&w.splice(c,1)
			}
		})
	})
	while (w.length>0) {
		data.forEach((a,b)=>{
			if (w.length>0) {
				const d=Math.floor(Math.random()*(w.length-1))
				data[b].c.push(w[d])
				w.splice(d,1)
			}
		})
	}
	lama.forEach(a=>{
		a.c.forEach((a,b)=>{
			b<3&&w.push(a)
		})
	})
	while (w.length>0) {
		data.forEach((a,b)=>{
			if (w.length>0) {
				const d=Math.floor(Math.random()*(w.length))
				data[b].c.push(w[d])
				w.splice(d,1)
			}
		})
	}
	data.forEach(a=>{
		const c={style:'background:#abc; border-radius:1vmin; font-weight:bold; padding:1vmin 3vmin; text-align:center; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:1vmin;'}
		el({a:'div', b:el({a:'div', b:el({a:'div', b:b, d:c}), c:'GRUP'}).parentElement, c:a.a})
		el({a:'div', b:el({a:'div', b:el({a:'div', b:b, d:c}), c:'Hari'}).parentElement, c:'Sabtu'})
		el({a:'div', b:el({a:'div', b:el({a:'div', b:el({a:'div', b:b, d:c}), c:a.b[0]}).parentElement, c:a.b[1]}).parentElement, c:a.b[2]})
		a.c.forEach((a,c)=>{
			const d=(c%2?'background:#eefaff;':'background:#eefffa;')+'border-radius:1vmin;'
			el({a:'div', b:b, c:c+1, d:{style:d+'text-align:center;'}})
			el({a:'div', b:b, c:a.a, d:{style:d+'text-align:center;'}})
			el({a:'div', b:b, c:a.b, d:{style:d+'padding:1.5vmin;'}})
		})
		el({a:'div', b:b, d:{style:'grid-column:1/span 3; height:5vmin;'}})
	})
	
	const f=el({a:'div', b: document.body, d:{style:'position:fixed; bottom:0; left:0; width:100vw; background:white; padding:3vmin; display:flex; justify-content:space-between; gap:1vmin;'}, e:{click:a=>{a.stopPropagation()}}})
	el({a:'button', b:f, c:'Kembali', e:{click:a=>{document.body.removeChild(a.target.parentElement.previousElementSibling);document.body.removeChild(a.target.parentElement)}}})
	el({a:'button', b:f, c:'download', e:{click:gambar}})
	el({a:'div', b:b, d:{style:'grid-column:1/span 3; height:'+(f.getBoundingClientRect().height+10)+'px'}})
}

addEventListener('load', ()=>{
	el({a:'div', b: document.body, c:'DAFTAR JAGA RT 07 RW 04', d:{style:'font-size:4vmin; font-weight:bold; margin-bottom:5vmin; padding:5vmin; text-align:center;'}})
	el({a:'button', b:el({a:'button', b:el({a:'button', b:el({a:'div', b: document.body, d:{style:'display:flex; flex-direction:column; gap:3vmin; padding:3vmin;'}}),
		c:'Upload Daftar Jaga Lama', e:{click:a=>{
			el({a:'input', d:{type:'file'}, e:{change:a=>{
				const b=new FileReader()
				b.onload=()=>{
					lama.length>0&&lama.splice(0,lama.length)
					JSON.parse(b.result).forEach(a=>{lama.push(a)})
				}
				b.readAsText(a.target.files[0])
			}}}).click()
		}}}).parentElement,
		c:'Buat Daftar Jaga Baru', e:{click:pilihHari}}).parentElement,
		c:'Daftar Warga RT 07 RW 04', e:{click:daftarWarga}})
})
