Browser("Edgewords Shop – e-commerce").FullScreen()
wait(2)
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce").Link("Dismiss").Click
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce").WebEdit("s").Set "cap"
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce").WebButton("Search").Click
Browser("Edgewords Shop – e-commerce").Page("Cap – Edgewords Shop").WebButton("Add to cart").Click
Browser("Edgewords Shop – e-commerce").Page("Cap – Edgewords Shop").Link("Cart").Click
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").Image("cap").Check CheckPoint("cap")
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").Link("Remove this item").Click
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").Link("Return to shop").Click
Browser("Edgewords Shop – e-commerce").CloseAllTabs()

