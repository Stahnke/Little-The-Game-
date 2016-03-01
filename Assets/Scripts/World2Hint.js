#pragma strict

private var TextOpen : boolean = false;
public var HintText : GameObject;

function OnTriggerStay2D (other : Collider2D){

	if(Input.GetKeyDown(KeyCode.Space))
	{
		Debug.Log("COLLIDED");
		HintText.SetActive(true);
		TextOpen = true;
	}
}

function OnTriggerExit2D (other : Collider2D){

		if(TextOpen)
		{
			HintText.SetActive(false);
			TextOpen = false;
		}

}