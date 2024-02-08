Browser("Edgewords Shop – e-commerce").FullScreen()
wait(2)
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce").Link("Dismiss").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce_2").WebEdit("s").Set "cap" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce_2").WebButton("Search").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Cap – Edgewords Shop").WebButton("Add to cart").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2)
Browser("Edgewords Shop – e-commerce").Page("Cap – Edgewords Shop").Link("Cart").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").Link("Remove this item").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait(3)
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").WebElement("Your cart is currently").Check CheckPoint("Your cart is currently empty.") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").Link("Return to shop").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Edgewords Shop – e-commerce").CloseAllTabs()
