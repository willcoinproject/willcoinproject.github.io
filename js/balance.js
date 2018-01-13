function loadBalance() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var floor = Math.floor(response.balance / 1e18);
      var progress = floor / 100;
    
      document.getElementById("balance").innerHTML = "ETH Raised: " + (713 + response.balance / 1e18); 
      AnimateBar(0, progress + 7.13, 1);

    }
  };
  xhttp.open("GET", "https://api.blockcypher.com/v1/eth/main/addrs/738d145faabb1e00cf5a017588a9c0f998318012/balance", true);
  xhttp.send();
};

function AnimateBar(amt, total, mod)
{
	if (amt <= total)
	{
		setTimeout(function() { document.getElementById("progress").style.width = amt + "%"; AnimateBar(amt + .3*mod, total, mod+.1); }, 40);		
	}
	else
	{
		document.getElementById("progress").style.width = total + "%";
	}
};

loadBalance();