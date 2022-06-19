getCovidWorld_case();
getCovidWorld_recovered();
getCovidWorld_death();
getCovidWorld_active();

function getCovidWorld_case(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let nguoinhiem = data.total.world.cases;
		document.getElementById("case_world").innerHTML = nguoinhiem.toLocaleString("en");

	});
}

function getCovidWorld_recovered(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let phuchoi = data.total.world.recovered;
		document.getElementById("recovered_world").innerHTML = phuchoi.toLocaleString("en");

	});
}

function getCovidWorld_death(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let tuvong = data.total.world.death;
		document.getElementById("death_world").innerHTML = tuvong.toLocaleString("en");

	});
}

function getCovidWorld_active(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let dangchua = data.total.world.treating;
		document.getElementById("active_world").innerHTML = dangchua.toLocaleString("en");

	});
}

getCovidVn_case();
getCovidVn_recovered();
getCovidVn_death();
getCovidVn_active();

function getCovidVn_case(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let nguoinhiem = data.total.internal.cases;
		document.getElementById("case_vn").innerHTML = nguoinhiem.toLocaleString("en");

	});
}

function getCovidVn_recovered(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let phuchoi = data.total.internal.recovered;
		document.getElementById("recovered_vn").innerHTML = phuchoi.toLocaleString("en");

	});
}

function getCovidVn_death(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let tuvong = data.total.internal.death;
		document.getElementById("death_vn").innerHTML = tuvong.toLocaleString("en");

	});
}

function getCovidVn_active(){
	fetch('https://static.pipezero.com/covid/data.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let dangchua = data.total.internal.cases - data.total.internal.death - data.total.internal.recovered;
		document.getElementById("active_vn").innerHTML = dangchua.toLocaleString("en");

	});
}

getVaccineVn_total();
getVaccineVn_one();
getVaccineVn_two();

function getVaccineVn_total(){
	fetch('https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let totalvct = data.data.first.total + data.data.second.total;

		document.getElementById("total_vaccinated").innerHTML = totalvct.toLocaleString("en");

	});
}

function getVaccineVn_one(){
	fetch('https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let onevct = data.data.first.total;
		document.getElementById("one_vaccinated").innerHTML = onevct.toLocaleString("en");

	});
}

function getVaccineVn_two(){
	fetch('https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let twovct = data.data.second.total;
		document.getElementById("two_vaccinated").innerHTML = twovct.toLocaleString("en");

	});
}