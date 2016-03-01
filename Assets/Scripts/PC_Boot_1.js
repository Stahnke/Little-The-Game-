#pragma strict

var DividerValue : float = 4f;
var i : int = 0;
var myTarget : Transform;
public var BootNumber : int = 0;
public var LinkPort : GameObject;
public var FailText : GameObject;
private var Key : boolean = false;

function OnTriggerStay2D (other : Collider2D)
{
	if(Input.GetKeyDown(KeyCode.Space))
	{
		if(BootNumber == 0)
		PCZoom();
		if(BootNumber == 1)
		{
			if(Key == true)
				PCZoom();
			else
			{
				FailText.SetActive(true);
				yield WaitForSeconds(3);
				FailText.SetActive(false);
			}
		}
		if(BootNumber == 2)
			PCBootSelection();
			
		if(BootNumber == 3)
		PCZoom();
	}
}

function PCZoom(){

		Debug.Log("PC BOOT>>>");
		GameObject.Find("Main Camera").SendMessageUpwards("SetTarget", myTarget);
		for(i = 0; i < 200; i++)
		{
			yield WaitForSeconds (0.0025);
			GameObject.Find("Main Camera").SendMessageUpwards("SetDivider", DividerValue);
			DividerValue += 0.175f;
		}
		PCBootSelection();

}

function PCBootSelection(){

	if(BootNumber == 0)
	{


		LinkPort.SetActive(true);
		yield WaitForSeconds(5);
		Application.LoadLevel("Puzzle 1");
	}
	if(BootNumber == 1)
	{
		LinkPort.SetActive(true);
		yield WaitForSeconds(5);
		Application.LoadLevel("Puzzle 2");
	}
	if(BootNumber == 2)
	{
		LinkPort.SetActive(true);
		yield WaitForSeconds(5);
		Application.LoadLevel("World4");
	}
	if(BootNumber == 3)
	{
		LinkPort.SetActive(true);
		yield WaitForSeconds(5);
		Application.LoadLevel("Puzzle 3");	
	}
}

function GotKey(){

	Key = true;

}