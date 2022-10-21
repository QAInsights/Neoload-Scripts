/*
 Purpose: Checks for any regression error in the Cart page by comparing the actual cart value with the expected cart value
 Author: NaveenKumar Namachivayam | QAInsights.com
 Build: 2022.11
 URL: https://store.qainsights.com
 
*/

// Printing the captured values

logger.debug("Product Price " + context.variableManager.getValue("productPrice"));
logger.debug("Cart Quantity " + context.variableManager.getValue("cartQuantity"));
logger.debug("Total Price " + context.variableManager.getValue("totalPrice"));

// Directives
var productPrice = context.variableManager.getValue("productPrice");
var cartQuantity = context.variableManager.getValue("cartQuantity");
var totalPrice = context.variableManager.getValue("totalPrice");

// Calculating expected total cart value
productPrice = productPrice.slice(1);
var expectedCartValue = parseFloat(productPrice) * parseInt(cartQuantity);

totalPrice = totalPrice.slice(1);

// Comparing Actual Vs Expected Cart Value 
if (parseFloat(expectedCartValue) == parseFloat(totalPrice) ) {
        logger.debug("No Regression Error. Cart value is matching.");
}
else {
        logger.debug("Regression Error");
}
