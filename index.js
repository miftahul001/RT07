const warga=[
	{a:'C5-07', b:'AGUS SUTOMO'},
	{a:'A3-25', b:'NANANG S.B.'},
	{a:'A3-15', b:'IRAWAN Y.'},
	{a:'C4-07', b:'SAID AMIR'},
	{a:'C3-16', b:'M. SOKIB'},
	{a:'C3-15', b:'ANDRA'},
	{a:'A3-27', b:'IMAM SYAHRONI'},
	{a:'C5-01', b:'YUDI SETIAWAN'},
	{a:'C5-16', b:'KUSNO'},
	{a:'C3-19', b:'SUWITO'},
	{a:'A3-17', b:'WARKOP'},
	{a:'C3-11', b:'MEIRIL ISA'},
	{a:'C5-03', b:'GATOT P.'},
	{a:'C5-10', b:'RIYANTO'},
	{a:'C5-02', b:'SUHADI'},
	{a:'C4-01', b:'SHOLEH'},
	{a:'C3-18', b:'ARIS PRIAMBODO'},
	{a:'A3-16', b:'AGUSTIAN (Toko EB)'},
	{a:'C5-15', b:'MARULI'},
	{a:'A3-12', b:'DWI H. ERWANTO'},
	{a:'A3-17', b:'MULYANTO'},
	{a:'C3-12', b:'TUTUG S.'},
	{a:'C5-15', b:'AMRI M.'},
	{a:'C4-02', b:'M. MUNIR'},
	{a:'C4-03', b:'YUDI ARIFIN'},
	{a:'C5-14', b:'HERU SETIAWAN'},
	{a:'C5-08', b:'WAHID'},
	{a:'C4-09', b:'AGUS MIMIN'},
	{a:'C3-14', b:'HERRY EFFENDI'},
	{a:'A3-10', b:'TOKO KARUNIA'},
	{a:'A3-28', b:'PURNOMO'},
	{a:'C3-17', b:'YULIANTO'},
	{a:'C5-06', b:'JUNAIDI'},
	{a:'C4-04', b:'KELVIN'},
	{a:'C3-21', b:'JOKO (Kos2an)'},
	{a:'A3-25', b:'RAHMAN (Parfum)'},
]

const daftarWarga=()=>{
	const a=el({a:'div', b: document.body, d:{style:'position:fixed; top:0; left:0; width:100vw; height:100vh; overflow-y:scroll; background:white; padding:3vmin; display:grid; grid-template-columns:1fr min-content; gap:3px; align-content:start;'}, e:{click:a=>{a.stopPropagation()}}})
	el({a:'div', b:a, c:'NAMA', d:{style:'background:#abc; border-radius:1vmin; font-weight:bold; padding:3vmin; text-align:center; position:sticky; top:-3vmin;'}})
	el({a:'div', b:a, c:'ALAMAT', d:{style:'background:#abc; border-radius:1vmin; font-weight:bold; padding:3vmin; text-align:center; position:sticky; top:-3vmin;'}})
	warga.forEach((b,c)=>{
		const d=(c%2?'background:#eefaff;':'background:#eefffa;')+'border-radius:1vmin; padding:1.5vmin 3vmin;'
		el({a:'div', b:a, c:b.b, d:{style:d}})
		el({a:'div', b:a, c:b.a, d:{style:d}})
	})
	el({a:'div', b:a, c:'a', d:{style:'background:rgba(0,0,0,0); color:rgba(0,0,0,0); padding:5vmin 0; margin:5vmin 0;'}})
	el({a:'div', b:a, c:'a', d:{style:'background:rgba(0,0,0,0); color:rgba(0,0,0,0); padding:5vmin 0; margin:5vmin 0;'}})
	const b=el({a:'div', b: document.body, d:{style:'position:fixed; bottom:0; left:0; width:100vw; background:white; padding:3vmin; display:flex; align-items:center; justify-content:center;'}, e:{click:a=>{a.stopPropagation()}}})
	el({a:'button', b:b, c:'Kembali', e:{click:a=>{document.body.removeChild(a.target.parentElement.previousElementSibling);document.body.removeChild(a.target.parentElement)}}})
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
	el({a:'button', b:a, c:'Upload Daftar Jaga Lama'})
	el({a:'div', b:a})
	el({a:'button', b:a, c:'Lanjut', e:{click:a=>{
		const b=(a=>{a=new Date(a[6], bln.indexOf(a[4]), a[2]); return {b:a.getMonth(), d:a.getDate(), t:a.getFullYear()}} )(a.target.parentElement.children[1].value.split(' '));
		hasil({a:parseInt(a.target.parentElement.children[3].value)||6, ...b})
	}}})
	el({a:'div', b:a})
	el({a:'button', b:a, c:'Kembali', e:{click:a=>{document.body.removeChild(a.target.parentElement)}}})
}

const hasil=a=>{
	const b=el({a:'div', b:document.body, d:{style:'position:fixed; top:0; left:0; width:100vw; height:100vh; overflow-y:scroll; background:white; padding:3vmin; display:grid; grid-template-columns:min-content min-content 1fr; gap:3px; align-content:start;'}, e:{click:a=>{a.stopPropagation()}}})
	const c=[], d=[], w=[...warga]
	a.a<2&&(a.a=6)
	a.c=a.a*7
	while (a.a>0) {
		a.a--
		const e=(a=>(a.getDate()<10?'0':'')+a.getDate()+'-'+(a.getMonth()<10?'0':'')+(a.getMonth()+1)+'-'+a.getFullYear())(new Date(a.t, a.b, a.d+(a.a*7)))
		const f=(a=>(a.getDate()<10?'0':'')+a.getDate()+'-'+(a.getMonth()<10?'0':'')+(a.getMonth()+1)+'-'+a.getFullYear())(new Date(a.t, a.b, a.d+a.c+(a.a*7)))
		const g=(a=>(a.getDate()<10?'0':'')+a.getDate()+'-'+(a.getMonth()<10?'0':'')+(a.getMonth()+1)+'-'+a.getFullYear())(new Date(a.t, a.b, a.d+2*a.c+(a.a*7)))
		c[a.a]={a:String.fromCharCode(65+a.a), b:[e,f,g], c:[]}
	}
	while (w.length>0) {
		c.forEach((a,b)=>{
			if (w.length>0) {
				const d=Math.floor(Math.random()*(w.length-1))
				c[b].c.push(w[d])
				w.splice(d,1)
			}
		})
	}
	c.forEach(a=>{
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
	el({a:'button', b:f, c:'sek pak, durung iso nyimpen'})
	el({a:'button', b:f, c:'sek pak, durung iso preview / cetak'})
	el({a:'div', b:b, d:{style:'grid-column:1/span 3; height:'+(f.getBoundingClientRect().height+10)+'px'}})
}

addEventListener('load', ()=>{
	el({a:'div', b: document.body, c:'DAFTAR JAGA RT 07 RW 04', d:{style:'font-size:4vmin; font-weight:bold; margin-bottom:5vmin; padding:5vmin; text-align:center;'}})
	el({a:'button', b:el({a:'button', b:el({a:'div', b: document.body, d:{style:'display:flex; flex-direction:column; gap:3vmin; padding:3vmin;'}}),
		c:'Buat Daftar Jaga Baru', e:{click:pilihHari}}).parentElement,
		c:'Daftar Warga RT 07 RW 04', e:{click:daftarWarga}})
})