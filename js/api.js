getCovidWorld_case();
getCovidWorld_recovered();
getCovidWorld_death();
getCovidWorld_active();

function getCovidWorld_case(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/global/all')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let nguoinhiem = data.cases;
		document.getElementById("case_world").innerHTML = nguoinhiem.toLocaleString("en");

	});
}

function getCovidWorld_recovered(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/global/all')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let phuchoi = data.recovered;
		document.getElementById("recovered_world").innerHTML = phuchoi.toLocaleString("en");

	});
}

function getCovidWorld_death(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/global/all')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let tuvong = data.deaths;
		document.getElementById("death_world").innerHTML = tuvong.toLocaleString("en");

	});
}

function getCovidWorld_active(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/global/all')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let dangchua = data.active;
		document.getElementById("active_world").innerHTML = dangchua.toLocaleString("en");

	});
}

getCovidVn_case();
getCovidVn_recovered();
getCovidVn_death();
getCovidVn_active();

function getCovidVn_case(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/vn')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let nguoinhiem = +data.total.totalCases;
		document.getElementById("case_vn").innerHTML = nguoinhiem.toLocaleString("en");

	});
}

function getCovidVn_recovered(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/vn')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let phuchoi = +data.total.totalRecovered;
		document.getElementById("recovered_vn").innerHTML = phuchoi.toLocaleString("en");

	});
}

function getCovidVn_death(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/vn')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let tuvong = +data.total.totalDeaths;
		document.getElementById("death_vn").innerHTML = tuvong.toLocaleString("en");

	});
}

function getCovidVn_active(){
	fetch('https://api-kent.netlify.app/.netlify/functions/api/vn')
	.then(res => res.json())
	.then(data => {
		console.log(data);

		let dangchua = data.total.totalCases - data.total.totalRecovered - data.total.totalDeaths;
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