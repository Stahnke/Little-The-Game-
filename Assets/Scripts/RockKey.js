#pragma strict

public var PC_Boot : PC_Boot_1;
private var TextOpen : boolean = false;
public var HintText : GameObject;
public var DText : Dialogue_Type;

function OnTriggerStay2D (other : Collider2D){

	if(Input.GetKeyDown(KeyCode.Space) && TextOpen == false)
	{
		TextOpen = true;
		Debug.Log("COLLIDED");
		PC_Boot.GotKey();
		HintText.SetActive(true);
		DText.StartingMethod();
	}
}

function OnTriggerExit2D (other : Collider2D){

		if(TextOpen)
		{
			HintText.SetActive(false);
			TextOpen = false;
		}

}