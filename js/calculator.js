/* var priceBTC,priceLTC,priceETH,url="http://192.168.1.104:3000",bonus=1,satoshi=1,ethereumAddress=ethereumAddress,bitcoinAddress=bitcoinAddress,litecoinAddress=litecoinAddress,coinType=jQuery("#b_select").val(),CCNumber=jQuery("#ccNumber").val(),ccCVC=jQuery("#ccCVC").val(),expirationMonth=jQuery("#CCMonth").find(":selected").text(),expirationYear=jQuery("#CCYear").find(":selected").text(),expirationDate=expirationMonth+"/"+expirationYear,amountForCreditCard=jQuery("#ccAmountEntered").val(),ExpiryMonth=$("#ExpiryMonth").find(":selected").text(),ExpiryYear=$("#ExpiryYear").find(":selected").text();function getraisedTokens(){$.ajax({url:url+"/users/getAllFunds",type:"GET",data:{},async:!1,success:function(e){console.log(e),jQuery("#ltc_raised").html(e.data.ltcBalance),jQuery("#btc_raised").html(e.data.btcBalance),jQuery("#eth_raised").html(e.data.ethBalance),jQuery("#usd_raised").html(e.data.usdBalance)}})}function stripeResponseHandler(e,t){if(console.log(t),t.error);else{var r=t.id;console.log("Token"),console.log(r);var o=jQuery("#loggedEmailUSD").val();jQuery("#USDEtherAddress").val();console.log(amountForCreditCard),$.ajax({url:url+"/users/postAddUserWalletInfo",type:"POST",data:{Email:o,Amount:jQuery("#ccAmountEntered").val(),token:r,EthAddress:jQuery("#USDEtherAddress").val(),type:"cc"},success:function(e){jQuery("#snackbar").html(""),jQuery("#snackbar").html(e.message),myFunction(),jQuery("#USDForm,#BTCForm").hide(),CCNumber="",ccCVC="",amountForCreditCard="",this.email=void 0,this.ethAddress=void 0,jQuery(".holding").show(),console.log(e)},error:function(e){e.status,$("#snackbar").html(e.statusText),myFunction()},async:!1})}}function submitCreditCard(){var e=jQuery("#ethFormEmail").val(),t=jQuery("#ethFormEth").val();/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?($.ajax({url:url+"/users/addUserLTC",type:"POST",data:{email:e,ethAddress:t},success:function(e){console.log(e),jQuery("#snackbar").html("Success!"),jQuery("#USDForm,#BTCForm,#ETHForm").hide(),myFunction(),jQuery("#YourWalletAddressInBTC").val(),this.email=void 0,this.ethAddress=void 0,jQuery(".holding").show(),$("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val("")},error:function(e){e.status,$("#snackbar").html(e.statusText),myFunction()},async:!1}),this.email=void 0,this.ethAddress=void 0):alert("enter invalid email address")}function submitEthForm(){var e=jQuery("#ethFormEmail1").val(),t=jQuery("#ethFormEth1").val();/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?($(".my-loader").show(),$.ajax({url:url+"/users/addUserETH",type:"POST",data:{email:e,ethAddress:t},success:function(e){console.log(e),jQuery("#snackbar").html("Success!"),jQuery("#ETHForm,#USDForm,#BTCForm,#BCHForm,#LTCForm").hide(),myFunction(),jQuery("#YourWalletAddressInBTC").val(),jQuery(".holding").show(),this.email=void 0,this.ethAddress=void 0,$(".my-loader").hide(),$("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val(""),this.ethAddress=void 0},error:function(e){console.log(e.status),e.status,$("#snackbar").html(e.statusText),myFunction(),$(".my-loader").hide()},async:!1})):alert("enter invalid email address")}function submitBTCLTCForm(){var e=jQuery("#ethFormEmail2").val(),t=jQuery("#ethFormEth2").val();console.log(e),console.log(t),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?($(".my-loader").show(),$.ajax({url:url+"/users/addUserBTC",type:"POST",data:{email:e,ethAddress:t},success:function(e){console.log(e),$(".my-loader").hide(),jQuery("#snackbar").html("Success!"),myFunction(),jQuery("#ETHForm,#USDForm,#BTCForm,#BCHForm,#LTCForm").hide(),jQuery("#copyButton").val(e.receiverBTCAddress),jQuery(".holding").show(),$("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val(""),this.email=void 0,this.ethAddress=void 0},error:function(e){console.log(e),$(".my-loader").hide()},async:!1})):alert("enter invalid email address")}function submitBCHformCard(){var e=jQuery("#ethFormEmail3").val(),t=jQuery("#ethFormEth3").val();/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?($(".my-loader").show(),console.log(url+"/users/addUserBCH"),$.ajax({url:url+"/users/addUserBCH",type:"POST",data:{email:e,ethAddress:t},success:function(e){console.log(e),$(".my-loader").hide(),jQuery("#snackbar").html("Success!"),myFunction(),jQuery("#ETHForm,#USDForm,#BTCForm,#BCHForm,#LTCForm").hide(),jQuery("#copyButton").val(e.receiverBTCAddress),$("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val(""),this.email=void 0,this.ethAddress=void 0,jQuery(".holding").show()},error:function(e){e.status,$("#snackbar").html(e.statusText),myFunction(),$(".my-loader").hide()},async:!1})):alert("enter invalid email address")}function recaptchaCallback(){$(".form-feilds-authorization").show()}function closeAuthForm(){$(".hero-steps").hide(),$(".btn-steps").removeClass("btn-primary");var e=$("div.setup-panel div a"),t=$(".setup-content"),r=$(".nextBtn");t.hide(),e.click(function(r){r.preventDefault();var o=$($(this).attr("href")),s=$(this);s.hasClass("disabled")||(e.removeClass("btn-primary").addClass("btn-default"),s.addClass("btn-primary"),t.hide(),o.show(),o.find("input:eq(0)").focus())}),r.click(function(){var e=$(this).closest(".setup-content"),t=e.attr("id"),r=$('div.setup-panel div a[href="#'+t+'"]').parent().next().children("a"),o=e.find("input[type='text'],input[type='url']"),s=!0;$(".form-group").removeClass("has-error");for(var a=0;a<o.length;a++)o[a].validity.valid||(s=!1,$(o[a]).closest(".form-group").addClass("has-error"));s&&r.removeAttr("disabled").trigger("click")}),$(".check-terms").hide(),$(".text-terms").show(),$(".step1 .btn-steps").addClass("btn-primary"),$(".next-on-authorize").hide(),$("div.setup-panel div a.btn-primary").trigger("click")}function myFunction(){var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)}function myFunction2(){var e=document.getElementById("snackbar2");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)}function copyToClipboard(e){console.log("copied");var t,r,o="_hiddenCopyText_",s="INPUT"===e.tagName||"TEXTAREA"===e.tagName;if(s)a=e,t=e.selectionStart,r=e.selectionEnd;else{if(!(a=document.getElementById(o))){var a=document.createElement("textarea");a.style.position="absolute",a.style.left="-9999px",a.style.top="0",a.id=o,document.body.appendChild(a)}a.textContent=e.textContent}var i,c=document.activeElement;a.focus(),a.setSelectionRange(0,a.value.length);try{i=document.execCommand("copy"),jQuery("#snackbar").html("Copied"),myFunction()}catch(e){i=!1}return c&&"function"==typeof c.focus&&c.focus(),s?e.setSelectionRange(t,r):a.textContent="",i}function hideAuthorizationFieldsAndContinue(){jQuery("#success_failure").hide();var e=$("#authorize_btcAddress").val(),t=$("#authorize_ltcAddress").val(),r=!1,o=$("#authorize_email").val(),s=$("#authorize_ethAddress").val();void 0!=o&&0!=o.length||(r=!0),void 0!=s&&42==s.length||(r=!0),r?(event.preventDefault(),$(".next-on-authorize").hide(),alert("Please fill out the form correctly.")):(console.log(e,t,o,s),$.ajax({url:url+"/users/postAddUserWalletInfo",type:"POST",data:{EthAddress:s,Email:o,bitcoinAddress:e,ltcAddress:t},success:function(e){console.log(e),200==e.code&&(jQuery("#authorize_email").val(""),jQuery("#authorize_ethAddress").val(""),jQuery("#authorize_ltcAddress").val(""),jQuery("#authorize_btcAddress").val(""),jQuery(".form-feilds-authorization").hide(),$(".next-on-authorize").show())},error:function(){alert("error")}}))}function showFields(){$(".form-feilds-authorization").show()}function showCompleteForm(){jQuery(".success").hide(),$("#completeForm").toggle()}function Checkboxes(){!($("#policyCheck").is(":checked")&&$("#documentCheck").is(":checked")&&$("#herosAgreement").is(":checked"))?$("#check_next").attr("disabled",!0):$("#check_next").attr("disabled",!1)}function resetValues(){jQuery("#customerEmail").val(""),jQuery("#customerWallet").val(""),jQuery("#customerHash").val("")}$.ajax({url:"https://min-api.cryptocompare.com/data/price",type:"get",data:{fsym:"BCH",tsyms:"USD"},success:function(e){priceBTC=e.USD},error:function(e){console.log(e)},async:!1}),$.ajax({url:"https://min-api.cryptocompare.com/data/price",type:"get",data:{fsym:"BTC",tsyms:"USD"},success:function(e){priceBCH=e.USD},error:function(e){console.log(e)},async:!1}),$.ajax({url:"https://min-api.cryptocompare.com/data/price",type:"get",data:{fsym:"LTC",tsyms:"USD"},success:function(e){priceLTC=e.USD},error:function(e){console.log(e)},async:!1}),$.ajax({url:"https://min-api.cryptocompare.com/data/price",type:"get",data:{fsym:"ETH",tsyms:"USD"},success:function(e){priceETH=e.USD},error:function(e){console.log(e)},async:!1}),$(document).ready(function(){getraisedTokens(),document.getElementById("copyAddress").addEventListener("click",function(){copyToClipboard(document.getElementById("copyButton"))}),$(".contribute-terms-button").click(function(){$(".text-terms").hide(),$(".check-terms").show(),Checkboxes()});var e=$("div.setup-panel div a"),t=$(".setup-content"),r=$(".nextBtn");t.hide(),e.click(function(r){r.preventDefault();var o=$($(this).attr("href")),s=$(this);s.hasClass("disabled")||(e.removeClass("btn-primary").addClass("btn-default"),s.addClass("btn-primary"),t.hide(),o.show(),o.find("input:eq(0)").focus())}),r.click(function(){var e=$(this).closest(".setup-content"),t=e.attr("id"),r=$('div.setup-panel div a[href="#'+t+'"]').parent().next().children("a"),o=e.find("input[type='text'],input[type='url']"),s=!0;$(".form-group").removeClass("has-error");for(var a=0;a<o.length;a++)o[a].validity.valid||(s=!1,$(o[a]).closest(".form-group").addClass("has-error"));s&&r.removeAttr("disabled").trigger("click")}),$("div.setup-panel div a.btn-primary").trigger("click")}),$(document).ready(function(){$("#b_select").selectric().on("change",function(){jQuery("#completeForm").slideUp(),jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp(),jQuery(".etheriumWallet,.bitCoinWallet,.liteCoinWallet").hide(),jQuery(".holding").hide();var e=jQuery("#b_select").val();"BCH"==e?($("#carexToBtc,#carexToLtc,#carexToUsd,#carexToEth").hide(),$("#carexToBch").show(),$("#btc_authorized").hide(),$("#ltc_authorized").hide(),$("#copyButton").val(""),$("#copyButton").val(ethereumAddress)):"LTC"==e?($("#carexToEth,#carexToBtc,#carexToUsd,#carexToBch").hide(),$("#carexToLtc").show(),$("#btc_authorized").hide(),$("#ltc_authorized").show(),$("#copyButton").val(""),$("#copyButton").val(litecoinAddress)):"ETH"==e?($("#carexToBtc,#carexToLtc,#carexToUsd,#carexToBch").hide(),$("#carexToEth").show(),$("#btc_authorized").hide(),$("#ltc_authorized").hide(),$("#copyButton").val(""),$("#copyButton").val(ethereumAddress)):"BTC"==e?($("#carexToBtc").show(),$("#carexToEth,#carexToLtc,#carexToUsd,#carexToBch").hide(),$("#btc_authorized").show(),$("#ltc_authorized").hide(),$("#copyButton").val(""),$("#copyButton").val(bitcoinAddress)):(jQuery("#USDForm").hide(),$("#carexToBtc,#carexToLtc,#carexToEth,#carexToBch").hide(),$("#carexToUsd").show(),$("#btc_authorized").hide(),$("#ltc_authorized").hide(),$("#copyButton").val(""),$("#copyButton").val(ethereumAddress))}),jQuery("#buy_btn").click(function(){$("#copyButton").show(),$("#completeForm").hide();var e=jQuery("#b_select").val();console.log("clicked"),"BTC"==e?(jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp(),jQuery("#BTCForm").show(),jQuery("#btc_authorized").show(),jQuery("#ltc_authorized").hide(),jQuery("#hashField").show(),$("#copyButton").val(""),$("#copyButton").val(bitcoinAddress)):"LTC"==e?(jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp(),jQuery("#USDForm").show(),jQuery("#btc_authorized").hide(),jQuery("#ltc_authorized").show(),jQuery("#hashField").hide(),$("#copyButton").val(""),$("#copyButton").val(litecoinAddress)):"BCH"==e?(jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp(),jQuery("#BCHForm").show()):(jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp(),jQuery("#ETHForm").show(),jQuery("#btc_authorized").hide(),jQuery("#ltc_authorized").hide(),jQuery("#hashField").hide(),$("#copyButton").val(""),$("#copyButton").val(ethereumAddress))}),jQuery("#subscription_btn").click(function(){jQuery(".subscription .errors").hide();var e,t=jQuery.trim(jQuery("#subscriptionEmail").val());void 0==t||0==t.length?(jQuery(".subscription .errors").show().html("Please enter an email"),e=!0):t.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)||(jQuery(".subscription .errors").show().html("Please enter a valid email address"),e=!0),e||jQuery.ajax({url:url+"/subscribers/addSubscriber",type:"POST",data:{Email:t},success:function(e){console.log(e),200==e.code?(jQuery(".subscription .errors").show(),jQuery(".dsubscription .errors").html("You have been subscribed successfully!")):jQuery(".subscription .errors").html("Error encoutered")},error:function(){alert("error")}})}),calculate_now(),$("#b_select").selectric(),jQuery("#submitForm").click(function(){jQuery(".success").hide(),jQuery(".etheriumWallet,.bitCoinWallet,.liteCoinWallet").hide();var e,t=jQuery("#num_val").val();if($.trim(jQuery("#customerEmail").val()))var r=jQuery("#customerEmail").val();else e=!0;if($.trim(jQuery("#customerWallet").val()))var o=jQuery("#customerWallet").val();else e=!0;if($.trim(jQuery("#customerWallet").val()))o=jQuery("#customerWallet").val();else e=!0;var s=jQuery("#b_select").val();if("BTC"==s)if($.trim(jQuery("#customerHash").val()))var a=jQuery("#customerHash").val();else e=!0;e?(jQuery(".success").html("Errors in the form!"),jQuery(".success").show()):(""!=a&&void 0!=a||(a=""),jQuery.ajax({url:url+"/purchase/purchaseTokens",type:"POST",data:{Email:r,WalletAddress:o,WalletType:2,Tokens:t,TxHash:a},success:function(e){200==e.code?(jQuery(".success").html(e.message),jQuery(".success").show(),jQuery("#completeForm").hide(),jQuery("#customerEmail").val(""),jQuery("#customerWallet").val(""),jQuery("#customerHash").val(""),jQuery(".success").show()):(jQuery(".etheriumWallet,.bitCoinWallet,.liteCoinWallet").hide(),jQuery("#completeForm").show(),jQuery(".success").hide())},error:function(){alert("error")}}))}),jQuery(".quantity").each(function(){var e=jQuery(this),t=e.find('input[type="number"]'),r=e.find(".quantity-up"),o=e.find(".quantity-down"),s=t.attr("min"),a=t.attr("max");step=t.attr("step"),jQuery("body").on("keyup",t,function(){var r=parseFloat(t.val());if(r>=a);else parseFloat(step);e.find("input").trigger("change");var o=jQuery('input[type="number"]').val();jQuery("#nat_value").val(o),jQuery(".bonus-box-val").text(bonus*o),calculate_now()}),r.click(function(){var r=parseFloat(t.val());if(r>=a)var o=r;else o=r+parseFloat(step);e.find("input").val(o),e.find("input").trigger("change");var s=jQuery('input[type="number"]').val();jQuery(".bonus-box-val").text(bonus*s),calculate_now()}),o.click(function(){var r=parseFloat(t.val());if(r<=s)var o=r;else o=r-parseFloat(step);e.find("input").val(o),e.find("input").trigger("change");var a=jQuery('input[type="number"]').val();jQuery(".bonus-box-val").text(bonus*a),calculate_now()})}),jQuery(".val_in").click(function(e){jQuery(".selectric .label").text(jQuery(this).text());var t=jQuery(".selectric-wrapper .selectric-items .selectric-scroll ul li.selected").text();jQuery("#currency").val(t)}),jQuery(".val_in").click(function(e){jQuery(this).hasClass("ineth")?jQuery(".only_eth").show():jQuery(".only_eth").hide()})});var firstTime=!0;function calculate_now(){var e=jQuery('input[type="number"]').val(),t=parseFloat(10/priceBTC).toFixed(3),r=parseFloat(10/priceLTC).toFixed(3),o=parseFloat(10/priceETH).toFixed(3),s=parseFloat(10/priceBCH).toFixed(3);jQuery("#carexToBtc").text("1 RC = "+t+"BTC"),jQuery("#carexToBch").text("1 RC = "+s+" BCH"),jQuery("#carexToEth").text("1 RC = "+o+" Eth"),jQuery("#carexToLtc").text("1 RC = "+r+" LTC"),firstTime&&(firstTime=!1,jQuery("#carexToUsd").show(),jQuery("#carexToBtc").hide());var a=parseFloat(10/priceETH*e).toFixed(3),i=parseFloat(10/priceLTC*e).toFixed(3),c=a+" ETH",l=parseFloat(10/priceBTC*e).toFixed(3)+'<span class="insideColors">BTC</span>',u=parseFloat(10/priceBCH*e).toFixed(3)+' <span class="insideColors">BCH</span>',n=parseFloat(10*e)+' <span class="insideColors">USD</span>',d=i+' <span class="insideColors">LTC</span>',h=bonus*e;jQuery(".bonus-box-val").text("+ "+parseFloat(h).toFixed(0)),jQuery("#bonus").val("+ "+parseFloat(h).toFixed(0)),jQuery(".inbtc").html(l),jQuery(".ineth").html(c),jQuery(".inltc").html(d),jQuery(".inbch").html(u),jQuery(".inusd").html(n),jQuery("currency").text(jQuery(".selected").text()),jQuery(".selectric .label").text(jQuery(".selected").text());var m=jQuery(".selectric-wrapper .selectric-items .selectric-scroll ul li.selected").text();jQuery("#currency").val(m)}jQuery("body").on("change","#agreement_ck",function(){if(jQuery("#agreement_ck:checked").length>0){var e=jQuery("#b_select").val();jQuery(".order_section").hide(),jQuery("#"+e).fadeIn("fast"),jQuery("html, body").animate({scrollTop:jQuery("#"+e).offset().top-200})}else jQuery(".order_section").hide(),jQuery(".agreement").fadeOut("fast")}); */

























/* My Code */





var url = "http://192.168.1.104:3000";

var bonus = 1;
var satoshi = 1;
var ethereumAddress = ethereumAddress;
var bitcoinAddress = bitcoinAddress;
var litecoinAddress = litecoinAddress;

var coinType = jQuery("#b_select").val();


var CCNumber = jQuery("#ccNumber").val();
var ccCVC = jQuery("#ccCVC").val();
var expirationMonth = jQuery('#CCMonth').find(":selected").text();
var expirationYear = jQuery('#CCYear').find(":selected").text();
var expirationDate = expirationMonth + "/" + expirationYear;
var amountForCreditCard = jQuery("#ccAmountEntered").val();

var ExpiryMonth = $('#ExpiryMonth').find(":selected").text();
var ExpiryYear = $('#ExpiryYear').find(":selected").text();

var priceBTC = 0;
var priceLTC = 0;
var priceETH = 0;
var priceBCH = 0;

function getraisedTokens() {

    /*  $.ajax({
         url: url + '/users/getAllFunds',
         type: 'GET',
         data: {},
         async: false,
         success: function (data) {
             console.log(data);
             jQuery("#ltc_raised").html(data.data.ltcBalance);
             jQuery("#btc_raised").html(data.data.btcBalance);
             jQuery("#eth_raised").html(data.data.ethBalance);
             jQuery("#usd_raised").html(data.data.usdBalance);
 
         }
     }); */

}


$.ajax({
    url: "https://min-api.cryptocompare.com/data/price",
    type: "get",

    data: {
        fsym: "BCH",
        tsyms: "USD"
    },
    success: function (response) {
        priceBCH = response.USD;
        console.log(priceBCH);
        calculate_now();
    },
    error: function (xhr) {
        console.log(xhr);
    },
    async: true
});
$.ajax({
    url: "https://min-api.cryptocompare.com/data/price",
    type: "get",

    data: {
        fsym: "BTC",
        tsyms: "USD"
    },
    success: function (response) {
        priceBTC = response.USD;
        calculate_now();
    },
    error: function (xhr) {
        console.log(xhr);
    },
    async: true
});

$.ajax({
    url: "https://min-api.cryptocompare.com/data/price",
    type: "get",

    data: {
        fsym: "LTC",
        tsyms: "USD"
    },
    success: function (response) {
        priceLTC = response.USD;
        console.log(priceLTC);
        calculate_now();
    },
    error: function (xhr) {
        console.log(xhr);
    },
    async: true
});

$.ajax({
    url: "https://min-api.cryptocompare.com/data/price",
    type: "get",

    data: {
        fsym: "ETH",
        tsyms: "USD"
    },
    success: function (response) {
        priceETH = response.USD;
        console.log(priceETH);
        calculate_now();
    },
    error: function (xhr) {
        console.log(xhr);
    },
    async: true
});

/* 
function stripeResponseHandler(status, response) {

    // Grab the form:
    console.log(response);

    // var $form = $('#payment-form');

    if (response.error) { // Problem!

    } else { // Token was created!

        // Get the token ID:
        var token = response.id;
        console.log("Token");
        console.log(token);

        var userEmail = jQuery("#loggedEmailUSD").val();
        var userEth = jQuery("#USDEtherAddress").val();

        console.log(amountForCreditCard);
        $.ajax({
            url: url + "/users/postAddUserWalletInfo",
            type: "POST",
            data: {
                Email: userEmail,
                Amount: jQuery("#ccAmountEntered").val(),
                token: token,
                EthAddress: jQuery("#USDEtherAddress").val(),
                type: "cc"
            },

            success: function (response) {
                jQuery("#snackbar").html("");
                jQuery("#snackbar").html(response.message);
                myFunction();
                jQuery("#USDForm,#BTCForm").hide();
                CCNumber = "";
                ccCVC = "";
                amountForCreditCard = "";
                    this.email = undefined;
            this.ethAddress=undefined;
                jQuery(".holding").show();
                console.log(response);
            },
            error: function (xhr) {
                    if(xhr.status == 400){
                    $("#snackbar").html(xhr.statusText);
                    myFunction();
                    
                }
                else
                {
                $("#snackbar").html(xhr.statusText);
                    myFunction();
                }
            },
            async: false
        });

        // Insert the token into the form so it gets submitted to the server:
        // $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        // $form.get(0).submit();

    }
} */


/* function submitCreditCard() {

   var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = jQuery("#ethFormEmail").val();
    var ethAddress = jQuery("#ethFormEth").val();
    if(pattern.test(email))
    {
    $.ajax({
        url: url + "/users/addUserLTC",
        type: "POST",

        data: {
            email: email,
            ethAddress: ethAddress,
            
        },

        success: function (response) {
            console.log(response);
            jQuery("#snackbar").html("Success!");
            jQuery("#USDForm,#BTCForm,#ETHForm").hide();
            myFunction();
            jQuery("#YourWalletAddressInBTC").val();
                this.email = undefined;
            this.ethAddress=undefined;
            jQuery(".holding").show();
            $("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val("");

        },
        error: function (xhr) {
          
                if(xhr.status == 400){
                    $("#snackbar").html(xhr.statusText);
                    myFunction();
                    
                }
                else
                {
                $("#snackbar").html(xhr.statusText);
                    myFunction();
                }
            
        },
        async: false
    });
    this.email = undefined;
    this.ethAddress =undefined;
    }
    else
    {
        alert("enter invalid email address");
    }
} */
function submitEthForm() {


    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = jQuery("#ethFormEmail1").val();
    var ethAddress = jQuery("#ethFormEth1").val();
    if (pattern.test(email)) {


        $(".my-loader").show();

        $.ajax({
            url: url + "/users/addUserETH",
            type: "POST",

            data: {
                email: email,
                ethAddress: ethAddress,

            },

            success: function (response) {
                console.log(response);
                jQuery("#snackbar").html("Success!");
                jQuery("#ETHForm,#USDForm,#BTCForm,#BCHForm,#LTCForm").hide();
                myFunction();
                jQuery("#YourWalletAddressInBTC").val();
                jQuery(".holding").show();
                this.email = undefined;
                this.ethAddress = undefined;
                $(".my-loader").hide();
                $("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val("");
                this.ethAddress = undefined;


            },
            error: function (xhr) {
                console.log(xhr.status);


                if (xhr.status == 400) {
                    $("#snackbar").html(xhr.statusText);
                    myFunction();

                }
                else {
                    $("#snackbar").html(xhr.statusText);
                    myFunction();
                }

                $(".my-loader").hide();

            },
            async: false
        });

    }
    else {
        alert("enter invalid email address");
    }


}
function submitBTCLTCForm() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = jQuery("#ethFormEmail2").val();
    var ethAddress = jQuery("#ethFormEth2").val();
    console.log(email);
    console.log(ethAddress);
    if (pattern.test(email)) {

        $(".my-loader").show();

        $.ajax({
            url: url + "/users/addUserBTC",
            type: "POST",

            data: {
                email: email,
                ethAddress: ethAddress,

            },

            success: function (response) {
                console.log(response);
                $(".my-loader").hide();
                jQuery("#snackbar").html("Success!");
                myFunction();
                jQuery("#ETHForm,#USDForm,#BTCForm,#BCHForm,#LTCForm").hide();
                jQuery("#copyButton").val(response.receiverBTCAddress);
                jQuery(".holding").show();
                $("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val("");
                this.email = undefined;
                this.ethAddress = undefined;

            },

            error: function (xhr) {
                console.log(xhr);
                $(".my-loader").hide();
            },
            async: false
        });

    }
    else {
        alert("enter invalid email address");
    }

}
function submitBCHformCard() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = jQuery("#ethFormEmail3").val();
    var ethAddress = jQuery("#ethFormEth3").val();

    if (pattern.test(email)) {

        $(".my-loader").show();

        console.log(url + "/users/addUserBCH");
        $.ajax({
            url: url + "/users/addUserBCH",
            type: "POST",

            data: {
                email: email,
                ethAddress: ethAddress,

            },

            success: function (response) {
                console.log(response);
                $(".my-loader").hide();
                jQuery("#snackbar").html("Success!");
                myFunction();
                //alert("Send Balnce to this Address.............."+response.receiverBTCAddress);
                jQuery("#ETHForm,#USDForm,#BTCForm,#BCHForm,#LTCForm").hide();
                //jQuery("#YourWalletAddressInBTC").val();
                jQuery("#copyButton").val(response.receiverBTCAddress);
                $("#USDForm input,#ETHForm input,#BCHForm input,#BTCForm input").val("");
                this.email = undefined;
                this.ethAddress = undefined;
                jQuery(".holding").show();

            },

            error: function (xhr) {
                if (xhr.status == 400) {
                    $("#snackbar").html(xhr.statusText);
                    myFunction();

                }
                else {
                    $("#snackbar").html(xhr.statusText);
                    myFunction();
                }

                $(".my-loader").hide();
            },
            async: false
        });

    }
    else {
        alert("enter invalid email address");
    }

}


/* function recaptchaCallback() {
    $(".form-feilds-authorization").show();

} */

/* function closeAuthForm() {
    $(".hero-steps").hide();
    $(".btn-steps").removeClass("btn-primary");
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });
    $(".check-terms").hide();
    $(".text-terms").show();
    $(".step1 .btn-steps").addClass("btn-primary");
    $(".next-on-authorize").hide();
    $('div.setup-panel div a.btn-primary').trigger('click');
} */

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


function myFunction2() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar2")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


function copyToClipboard(elem) {
    console.log("copied");

    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
        jQuery("#snackbar").html("Copied");
        myFunction();
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

/* 
function hideAuthorizationFieldsAndContinue() {
    jQuery("#success_failure").hide();
    var btc_address = $("#authorize_btcAddress").val();
    var ltc_address = $("#authorize_ltcAddress").val();



    var error = false;
    var auth_email = $("#authorize_email").val();
    var eth_address = $("#authorize_ethAddress").val();



    if (auth_email == undefined || auth_email.length == 0) {
        error = true;
    }

    if (eth_address == undefined || eth_address.length != 42) {
        error = true;
    }



    if (error) {
        event.preventDefault();
        $(".next-on-authorize").hide();
        alert("Please fill out the form correctly.");
    } else {

        console.log(btc_address, ltc_address, auth_email, eth_address);

        $.ajax({
            url: url + "/users/postAddUserWalletInfo",
            type: "POST",
            data: { EthAddress: eth_address, Email: auth_email, bitcoinAddress: btc_address, ltcAddress: ltc_address },
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    //	jQuery("#success_failure").html("Data successfully saved!");
                    //jQuery("#success_failure").show();
                    jQuery("#authorize_email").val("");
                    jQuery("#authorize_ethAddress").val("");
                    jQuery("#authorize_ltcAddress").val("");
                    jQuery("#authorize_btcAddress").val("");
                    jQuery(".form-feilds-authorization").hide();
                    // Show button for next
                    $(".next-on-authorize").show();

                } else {

                    //	$(".subscription .errors").html("Error encoutered");
                    //	jQuery("#success_failure").html("Data not saved!");
                    //	jQuery("#success_failure").show();

                }
            },
            error: function () {
                alert('error');
            }
        });


    }



}
 */
/* function showFields() {
    $(".form-feilds-authorization").show();
}
 */
function showCompleteForm() {
    jQuery(".success").hide();
    $("#completeForm").toggle();

}
/* 
function Checkboxes() {

    var error = true;

    if (($('#policyCheck').is(':checked')) && ($('#documentCheck').is(':checked')) && ($('#herosAgreement').is(':checked'))) {
        error = false;
    } else {
        error = true;
    }




    if (error) {

        $('#check_next').attr('disabled', true);


    } else {

        $('#check_next').attr('disabled', false);

    }

} */
$(document).ready(function () {

    /*   getraisedTokens(); */
    /*  document.getElementById("copyAddress").addEventListener("click", function () {
         copyToClipboard(document.getElementById("copyButton"));
     });
  */



    /*  $(".contribute-terms-button").click(function () {
 
         $(".text-terms").hide();
         $(".check-terms").show();
 
         Checkboxes();
 
 
     }); */





    /*   var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');
  
      allWells.hide();
  
      navListItems.click(function (e) {
          e.preventDefault();
          var $target = $($(this).attr('href')),
              $item = $(this);
  
          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-primary').addClass('btn-default');
              $item.addClass('btn-primary');
              allWells.hide();
              $target.show();
              $target.find('input:eq(0)').focus();
          }
      });
  
      allNextBtn.click(function () {
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              curInputs = curStep.find("input[type='text'],input[type='url']"),
              isValid = true;
  
          $(".form-group").removeClass("has-error");
          for (var i = 0; i < curInputs.length; i++) {
              if (!curInputs[i].validity.valid) {
                  isValid = false;
                  $(curInputs[i]).closest(".form-group").addClass("has-error");
              }
          }
  
          if (isValid)
              nextStepWizard.removeAttr('disabled').trigger('click');
      });
  
      $('div.setup-panel div a.btn-primary').trigger('click'); */
});
$(document).ready(function () {



    $('#b_select').selectric().on('change', function () {
        jQuery("#completeForm").slideUp();
        jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp();
        jQuery(".etheriumWallet,.bitCoinWallet,.liteCoinWallet").hide();

        jQuery(".holding").hide();

        var coin = jQuery("#b_select").val();
        var coinType = coin;
        if (coin == "BCH") {
            $("#carexToBtc,#carexToLtc,#carexToUsd,#carexToEth").hide();
            $("#carexToBch").show();
            $("#btc_authorized").hide();
            $("#ltc_authorized").hide();
            $("#copyButton").val("");
            $("#copyButton").val(ethereumAddress);
        }
        else if (coin == "LTC") {

            $("#carexToEth,#carexToBtc,#carexToUsd,#carexToBch").hide();
            $("#carexToLtc").show();
            $("#btc_authorized").hide();
            $("#ltc_authorized").show();
            $("#copyButton").val("");
            $("#copyButton").val(litecoinAddress);
        } else if (coin == "ETH") {


            $("#carexToBtc,#carexToLtc,#carexToUsd,#carexToBch").hide();
            $("#carexToEth").show();
            $("#btc_authorized").hide();
            $("#ltc_authorized").hide();
            $("#copyButton").val("");
            $("#copyButton").val(ethereumAddress);
        }
        else if (coin == "BTC") {
            $("#carexToBtc").show();

            $("#carexToEth,#carexToLtc,#carexToUsd,#carexToBch").hide();

            $("#btc_authorized").show();
            $("#ltc_authorized").hide();
            $("#copyButton").val("");
            $("#copyButton").val(bitcoinAddress);
        }

        else {

            jQuery("#USDForm").hide();
            $("#carexToBtc,#carexToLtc,#carexToEth,#carexToBch").hide();
            $("#carexToUsd").show();
            $("#btc_authorized").hide();
            $("#ltc_authorized").hide();
            $("#copyButton").val("");
            $("#copyButton").val(ethereumAddress);

        }


    });

    jQuery("#buy_btn").click(function () {
        $("#copyButton").show();
        $("#completeForm").hide();


        var coin = jQuery("#b_select").val();
        console.log('clicked');
        if (coin == "BTC") {
            jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp();
            jQuery("#BTCForm").show();
            jQuery("#btc_authorized").show();
            jQuery("#ltc_authorized").hide();
            jQuery("#hashField").show();
            $("#copyButton").val("");
            $("#copyButton").val(bitcoinAddress);

        }
        else if (coin == "LTC") {

            jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp();
            jQuery("#USDForm").show();
            jQuery("#btc_authorized").hide();
            jQuery("#ltc_authorized").show();
            jQuery("#hashField").hide();


            $("#copyButton").val("");
            $("#copyButton").val(litecoinAddress);
        }
        else if (coin == "BCH") {

            jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp();
            jQuery("#BCHForm").show();


        }
        else {
            jQuery("#BTCForm,#USDForm,#BCHForm,#ETHForm").slideUp();
            jQuery("#ETHForm").show();

            jQuery("#btc_authorized").hide();
            jQuery("#ltc_authorized").hide();
            jQuery("#hashField").hide();

            $("#copyButton").val("");
            $("#copyButton").val(ethereumAddress);


        }


    })

    jQuery("#subscription_btn").click(function () {

        jQuery(".subscription .errors").hide();
        var subscriptionEmail = jQuery.trim(jQuery("#subscriptionEmail").val());
        var emailError;


        if (subscriptionEmail == undefined || subscriptionEmail.length == 0) {
            jQuery(".subscription .errors").show().html("Please enter an email");
            emailError = true;
        } else {


            if ((!subscriptionEmail.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))) {
                jQuery(".subscription .errors").show().html("Please enter a valid email address");
                emailError = true;

            }

        }






        if (emailError) {


        } else {


            jQuery.ajax({
                url: url + "/subscribers/addSubscriber",
                type: "POST",
                data: { Email: subscriptionEmail },
                success: function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        jQuery(".subscription .errors").show();
                        jQuery(".dsubscription .errors").html("You have been subscribed successfully!");

                    } else {

                        jQuery(".subscription .errors").html("Error encoutered");

                    }
                },
                error: function () {
                    alert('error');
                }
            });



        }




    })


    calculate_now();
    $('#b_select').selectric();





    jQuery("#submitForm").click(function () {
        jQuery(".success").hide();
        jQuery(".etheriumWallet,.bitCoinWallet,.liteCoinWallet").hide();

        var tokens = jQuery("#num_val").val();
        var error;
        if (!$.trim(jQuery("#customerEmail").val())) {
            error = true;
        } else {
            var email = jQuery("#customerEmail").val();
        }

        if (!$.trim(jQuery("#customerWallet").val())) {
            error = true;
        } else {
            var wallet = jQuery("#customerWallet").val();
        }

        if (!$.trim(jQuery("#customerWallet").val())) {
            error = true;
        } else {
            var wallet = jQuery("#customerWallet").val();
        }

        var coin = jQuery("#b_select").val();
        if (coin == "BTC") {

            if (!$.trim(jQuery("#customerHash").val())) {
                error = true;
            } else {
                var hash = jQuery("#customerHash").val();
            }

        }


        if (error) {
            jQuery(".success").html("Errors in the form!");
            jQuery(".success").show();
        } else {
            if (hash == "" || hash == undefined) {
                hash = "";
            }


            jQuery.ajax({
                url: url + "/purchase/purchaseTokens",
                type: "POST",
                data: { Email: email, WalletAddress: wallet, WalletType: 2, Tokens: tokens, TxHash: hash },
                success: function (data) {
                    if (data.code == 200) {
                        jQuery(".success").html(data.message);
                        jQuery(".success").show();

                        if (coin == "BTC") {
                            // jQuery(".bitCoinWallet").show();
                        } else {
                            // jQuery(".etheriumWallet").show();
                        }
                        jQuery("#completeForm").hide();
                        jQuery("#customerEmail").val('');
                        jQuery("#customerWallet").val('');
                        jQuery("#customerHash").val('');

                        // jQuery(".success").html("Your infomartion has been collected. Thank you!");
                        jQuery(".success").show();
                    } else {
                        jQuery(".etheriumWallet,.bitCoinWallet,.liteCoinWallet").hide();
                        jQuery("#completeForm").show();
                        jQuery(".success").hide();
                    }
                },
                error: function () {
                    alert('error');
                }
            });


        }





    })
    jQuery('.quantity').each(function () {
        /* var bonus = (25/100); */
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        step = input.attr('step');


        jQuery('body').on('keyup', input, function () {
            /* var bonus = (25/100); */
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + parseFloat(step);
            }
            //spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            var in_val = jQuery('input[type="number"]').val();
            jQuery("#nat_value").val(in_val);
            jQuery('.bonus-box-val').text(bonus * in_val);

            calculate_now();


        });

        btnUp.click(function () {
            /* var bonus = (25/100); */
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + parseFloat(step);
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            var in_val = jQuery('input[type="number"]').val();
            jQuery('.bonus-box-val').text(bonus * in_val);
            calculate_now();
        });

        btnDown.click(function () {
            /* var bonus = (25/100); */
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - parseFloat(step);
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            var in_val = jQuery('input[type="number"]').val();
            jQuery('.bonus-box-val').text(bonus * in_val);
            calculate_now();
        });

    });

    jQuery('.val_in').click(function (e) {

        // console.log(jQuery(this).text());
        jQuery('.selectric .label').text(jQuery(this).text());

        var currency = jQuery(".selectric-wrapper .selectric-items .selectric-scroll ul li.selected").text();
        jQuery("#currency").val(currency);
    });

    jQuery('.val_in').click(function (e) {
        var x = jQuery(this);
        // console.log(x);
        if (x.hasClass('ineth')) {
            jQuery('.only_eth').show();
        } else {
            jQuery('.only_eth').hide();
        }
    });


})


function resetValues() {

    jQuery("#customerEmail").val('');
    jQuery("#customerWallet").val('');
    jQuery("#customerHash").val('');
}
var firstTime = true;
function calculate_now() {

    var in_val = jQuery('input[type="number"]').val();

    var PriceUSd = 10;

    if (priceBCH != 0 && priceETH != 0 && priceBTC != 0 && priceLTC != 0) {



        var careToBtc = parseFloat(PriceUSd / priceBTC).toFixed(3)
        var careToLtc = parseFloat(PriceUSd / priceLTC).toFixed(3)
        var careToEth = parseFloat(PriceUSd / priceETH).toFixed(3)
        var careToBch = parseFloat(PriceUSd / priceBCH).toFixed(3)
        var careToUSD = 10;

        jQuery("#carexToBtc").text("1 RC = " + careToBtc + "BTC");
        jQuery("#carexToBch").text("1 RC = " + careToBch + " BCH");
        jQuery("#carexToEth").text("1 RC = " + careToEth + " Eth");
        jQuery("#carexToLtc").text("1 RC = " + careToLtc + " LTC");

        // jQuery("#carexToUsd").text("1 RapidCoin =" + careToUSD + " USD");
        if (firstTime) {
            firstTime = false;
            jQuery("#carexToUsd").show();
            jQuery("#carexToBtc").hide();
        }


        var eth_final = parseFloat((PriceUSd / priceETH) * in_val).toFixed(3);

        var ltc_final = parseFloat((PriceUSd / priceLTC) * in_val).toFixed(3);

        var eth_text = eth_final + ' ETH';
        var btc_text = parseFloat((PriceUSd / priceBTC) * in_val).toFixed(3) + '<span class="insideColors">BTC</span>';
        var bch_text = parseFloat((PriceUSd / priceBCH) * in_val).toFixed(3) + ' <span class="insideColors">BCH</span>';

        var usd_final = parseFloat((PriceUSd) * in_val);
        var usd_text = usd_final + ' <span class="insideColors">USD</span>';
        var ltc_text = ltc_final + ' <span class="insideColors">LTC</span>';

        var calc_res = bonus * in_val;
        jQuery('.bonus-box-val').text("+ " + (parseFloat(calc_res).toFixed(0)));
        jQuery("#bonus").val("+ " + (parseFloat(calc_res).toFixed(0)));
        jQuery('.inbtc').html(btc_text);
        jQuery('.ineth').html(eth_text);
        jQuery('.inltc').html(ltc_text);
        jQuery('.inbch').html(bch_text);
        jQuery('.inusd').html(usd_text);
        jQuery("currency").text(jQuery('.selected').text());

        jQuery('.selectric .label').text(jQuery('.selected').text());


        var currency = jQuery(".selectric-wrapper .selectric-items .selectric-scroll ul li.selected").text();
        jQuery("#currency").val(currency);

    }



}

jQuery('body').on('change', '#agreement_ck', function () {

    if (jQuery('#agreement_ck:checked').length > 0) {
        var psection = jQuery('#b_select').val();
        jQuery('.order_section').hide();
        jQuery('#' + psection).fadeIn('fast');
        jQuery("html, body").animate({
            scrollTop: jQuery('#' + psection).offset().top - 200
        });
    } else {
        jQuery('.order_section').hide();
        jQuery('.agreement').fadeOut('fast');
    }
});