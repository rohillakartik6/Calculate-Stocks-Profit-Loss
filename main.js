var initialPrice = $("#initial-price");
var stockQuantity = $("#stock-quantity");
var currentPrice = $("#current-price");
var outputBox = $("#output-box");

var submitBtn = $("#btn");

submitBtn.click(function () {
  var ip = initialPrice.val();
  var qty = stockQuantity.val();
  var curr = currentPrice.val();
  calculateProfitAndLoss(ip, qty, curr);
});

function calculateProfitAndLoss(initialPrice, stockQuantity, currentPrice) {
  if (initialPrice < currentPrice) {
    var profit = (currentPrice - initialPrice) * stockQuantity;
    outputBox.removeClass("bg-warning");
    outputBox.addClass("bg-info");
    showOutput(
      "Hey your profit is " +
        profit +
        " and percentage is " +
        Math.round((profit / initialPrice) * 100) +
        " %😊"
    );
  }
   else if (initialPrice > currentPrice) {
    var loss = (initialPrice - currentPrice) * stockQuantity;
    outputBox.removeClass("bg-info");
    outputBox.addClass("bg-warning");
    
    showOutput(
      "Hey your loss is " +
        loss +
        " and the loss percentage is " +
        Math.round((loss / initialPrice) * 100) + " %🙁."
    );
  } 
  else {
    showOutput("No pain No gain and no gain no pain😯");
    outputBox.removeClass("bg-info");
    outputBox.removeClass("bg-warning");
    outputBox.addClass("bg-light");
  }
}
function showOutput(message){
    console.log(message);
    outputBox.fadeIn();
    outputBox.text(message);

}

$("input").on("keypress",function(){
    if (initialPrice < currentPrice) {
    outputBox.removeClass("bg-info");
    }
    else if(initialPrice > currentPrice){
        outputBox.removeClass("bg-warning");
    }
});
