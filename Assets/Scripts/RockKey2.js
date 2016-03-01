#pragma strict

private var TextOpen : boolean = false;
public var HintText : GameObject;
public var Bucket : GameObject;

function OnTriggerStay2D (other : Collider2D){

	if(Input.GetKeyDown(KeyCode.Space) && TextOpen == false)
	{
		TextOpen = true;
		Debug.Log("COLLIDED");
		HintText.SetActive(true);
		Bucket.SetActive(false);
	}
}

function OnTriggerExit2D (other : Collider2D){

		if(TextOpen)
		{
			HintText.SetActive(false);
			TextOpen = false;
		}

}