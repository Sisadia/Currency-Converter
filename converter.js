  function firstToSecond(){

  var input1 = document.getElementById("firstCurrency").value;
  var input2 = document.getElementById("SecondCurrency").value;

         // from BDT TO BAKI ALL CUURENCY
  if(document.getElementById("inputCurrency").value=='taka'){
    if(document.getElementById("OutputCurrency").value=='taka1'){
  document.getElementById("SecondCurrency").value=input1*1;
  }

  }
 if(document.getElementById("inputCurrency").value=='taka'){
    if(document.getElementById("OutputCurrency").value=='usd1'){
  document.getElementById("SecondCurrency").value=input1*0.012;
  }
  }
 if(document.getElementById("inputCurrency").value=='taka'){
    if(document.getElementById("OutputCurrency").value=='euro1'){
  document.getElementById("SecondCurrency").value=input1*0.011;
  }
  }
 if(document.getElementById("inputCurrency").value=='taka'){
    if(document.getElementById("OutputCurrency").value=='gbp1'){
  document.getElementById("SecondCurrency").value=input1*0.0095;
  }
  }
 if(document.getElementById("inputCurrency").value=='taka'){
    if(document.getElementById("OutputCurrency").value=='aud1'){
  document.getElementById("SecondCurrency").value=input1*0.017;
  }
  }
 if(document.getElementById("inputCurrency").value=='taka'){
    if(document.getElementById("OutputCurrency").value=='cad1'){
  document.getElementById("SecondCurrency").value=input1*0.016;
  }
  }

  // from USD TO BAKI ALL CUURENCY
 if(document.getElementById("inputCurrency").value=='usd'){
   if(document.getElementById("OutputCurrency").value=='taka1'){
 document.getElementById("SecondCurrency").value=input1*84.72;
}

}
 if(document.getElementById("inputCurrency").value=='usd'){
   if(document.getElementById("OutputCurrency").value=='usd1'){
 document.getElementById("SecondCurrency").value=input1*1;
}
}
 if(document.getElementById("inputCurrency").value=='usd'){
   if(document.getElementById("OutputCurrency").value=='euro1'){
 document.getElementById("SecondCurrency").value=input1*0.89;
}
}
 if(document.getElementById("inputCurrency").value=='usd'){
   if(document.getElementById("OutputCurrency").value=='gbp1'){
 document.getElementById("SecondCurrency").value=input1*0.81;
}
}
 if(document.getElementById("inputCurrency").value=='usd'){
   if(document.getElementById("OutputCurrency").value=='aud1'){
 document.getElementById("SecondCurrency").value=input1*1.45;
}
}
 if(document.getElementById("inputCurrency").value=='usd'){
   if(document.getElementById("OutputCurrency").value=='cad1'){
 document.getElementById("SecondCurrency").value=input1*1.36;
}
}
  // from EURO TO BAKI ALL CUURENCY
 if(document.getElementById("inputCurrency").value=='euro'){
	if(document.getElementById("OutputCurrency").value=='taka1'){
 document.getElementById("SecondCurrency").value=input1*94.97;
  }

  }
 if(document.getElementById("inputCurrency").value=='euro'){
	if(document.getElementById("OutputCurrency").value=='usd1'){
 document.getElementById("SecondCurrency").value=input1*1.12;
  }
  }
 if(document.getElementById("inputCurrency").value=='euro'){
	if(document.getElementById("OutputCurrency").value=='euro1'){
 document.getElementById("SecondCurrency").value=input1*1;
  }
  }
 if(document.getElementById("inputCurrency").value=='euro'){
	if(document.getElementById("OutputCurrency").value=='gbp1'){
 document.getElementById("SecondCurrency").value=input1*0.90;
  }
  }
 if(document.getElementById("inputCurrency").value=='euro'){
	if(document.getElementById("OutputCurrency").value=='aud1'){
 document.getElementById("SecondCurrency").value=input1*1.63;
  }
  }
 if(document.getElementById("inputCurrency").value=='euro'){
	if(document.getElementById("OutputCurrency").value=='cad1'){
 document.getElementById("SecondCurrency").value=input1*1.52;
  }
}

    // from GBP TO BAKI ALL CUURENCY
 if(document.getElementById("inputCurrency").value=='gbp'){
	if(document.getElementById("OutputCurrency").value=='taka1'){
 document.getElementById("SecondCurrency").value=input1*105.03;
	}

	}
 if(document.getElementById("inputCurrency").value=='gbp'){
	if(document.getElementById("OutputCurrency").value=='usd1'){
 document.getElementById("SecondCurrency").value=input1*1.24;
	}
	}
 if(document.getElementById("inputCurrency").value=='gbp'){
	if(document.getElementById("OutputCurrency").value=='euro1'){
 document.getElementById("SecondCurrency").value=input1*1.11;
	}
	}
 if(document.getElementById("inputCurrency").value=='gbp'){
    if(document.getElementById("OutputCurrency").value=='gbp1'){
 document.getElementById("SecondCurrency").value=input1*1;
	}
	}
 if(document.getElementById("inputCurrency").value=='gbp'){
    if(document.getElementById("OutputCurrency").value=='aud1'){
 document.getElementById("SecondCurrency").value=input1*1.80;
	}
	}
 if(document.getElementById("inputCurrency").value=='gbp'){
	if(document.getElementById("OutputCurrency").value=='cad1'){
 document.getElementById("SecondCurrency").value=input1*1.68;
	}
	}

	    // from AUD TO BAKI ALL CUURENCY
 if(document.getElementById("inputCurrency").value=='aud'){
	if(document.getElementById("OutputCurrency").value=='taka1'){
 document.getElementById("SecondCurrency").value=input1*58.47;
	}
	}
 if(document.getElementById("inputCurrency").value=='aud'){
	if(document.getElementById("OutputCurrency").value=='usd1'){
 document.getElementById("SecondCurrency").value=input1*0.69;
	}
	}
 if(document.getElementById("inputCurrency").value=='aud'){
	if(document.getElementById("OutputCurrency").value=='euro1'){
 document.getElementById("SecondCurrency").value=input1*0.62;
	}
	}
 if(document.getElementById("inputCurrency").value=='aud'){
    if(document.getElementById("OutputCurrency").value=='gbp1'){
 document.getElementById("SecondCurrency").value=input1*0.56;
	}
	}
 if(document.getElementById("inputCurrency").value=='aud'){
	if(document.getElementById("OutputCurrency").value=='aud1'){
 document.getElementById("SecondCurrency").value=input1*1;
	}
    }
 if(document.getElementById("inputCurrency").value=='aud'){
	if(document.getElementById("OutputCurrency").value=='cad1'){
 document.getElementById("SecondCurrency").value=input1*1.68;
	}
	}



 // from CAD TO BAKI ALL CUURENCY
 if(document.getElementById("inputCurrency").value=='cad'){
	if(document.getElementById("OutputCurrency").value=='taka1'){
  document.getElementById("SecondCurrency").value=input1*62.46;
  }

  }
  if(document.getElementById("inputCurrency").value=='cad'){
	if(document.getElementById("OutputCurrency").value=='usd1'){
  document.getElementById("SecondCurrency").value=input1*0.74;
  }
  }
  if(document.getElementById("inputCurrency").value=='cad'){
	if(document.getElementById("OutputCurrency").value=='euro1'){
  document.getElementById("SecondCurrency").value=input1*0.66;
  }
  }
  if(document.getElementById("inputCurrency").value=='cad'){
	if(document.getElementById("OutputCurrency").value=='gbp1'){
  document.getElementById("SecondCurrency").value=input1*0.59;
  }
  }
  if(document.getElementById("inputCurrency").value=='cad'){
	if(document.getElementById("OutputCurrency").value=='aud1'){
  document.getElementById("SecondCurrency").value=input1*1.07;
  }
  }
  if(document.getElementById("inputCurrency").value=='cad'){
	if(document.getElementById("OutputCurrency").value=='cad1'){
  document.getElementById("SecondCurrency").value=input1*1;
  }
  }

}
