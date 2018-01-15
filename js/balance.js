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

function calculateeth()
{
  var amt = document.getElementById("willamt").value;
  var rate = 7000;
  var eth = 0;
    var eth = Math.floor(amt/7000 * 1e18)
    eth = eth/1e18;
    document.getElementById("sendamt").innerHTML = "Send " + eth + " ETH to the following address:";
    document.getElementById("sendamt").style.display = "inline-block"
}

loadBalance();