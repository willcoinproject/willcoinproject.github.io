function loadBalance() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var floor = Math.floor(response.balance / 1e18);
      var progress = floor / 100;
    
      document.getElementById("balance").innerHTML = "ETH Raised: " + (713.452124 + response.balance / 1e18); 
      AnimateBar(0, progress + 7.13, 1);

    }
  };
  xhttp.open("GET", "https://api.blockcypher.com/v1/eth/main/addrs/780cb0e90cf9bca586ccacc7280ea621d0857b7d/balance", true);
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
    if (eth > 0)
    {
      document.getElementById("sendamt").innerHTML = "Send " + eth + " ETH to the following address: 0X780CB0E90CF9BCA586CCACC7280EA621D0857B7D";
      document.getElementById("sendamt").style.display = "inline-block";   
            document.getElementById("sendamt").style.fontWeight = "bold";  
                       document.getElementById("senddiv").style.display = "inline-block";    
   
    }
    else
    {
           document.getElementById("sendamt").style.display = "none";
           document.getElementById("senddiv").style.display = "none";    

    }

}

loadBalance();