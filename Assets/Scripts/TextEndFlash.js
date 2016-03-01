#pragma strict
import UnityEngine.UI;

public var waitTime = 0.5;	
private var message : String;
private var continue_able = false;
public var Cinematic : int = 100;

function Start() {
	message = GetComponent.<Text>().text;
	GetComponent.<Text>().text = "";
}

function Accept () {

	continue_able = true;
	GetComponent.<Text>().text = message;
	StopCoroutine("Flash");
    StartCoroutine("Flash");

}

function Flash () {

		GetComponent.<Text>().text += "█";
		yield WaitForSeconds(waitTime);
		GetComponent.<Text>().text = GetComponent.<Text>().text.Substring(0, GetComponent.<Text>().text.Length - 1);
		yield WaitForSeconds(waitTime);
		Accept();
}

function Update() {

	if(Cinematic == 1)
	{
		if(Input.GetKeyDown(KeyCode.Space) && continue_able == true)
		{		
			Debug.Log("SPACE!");
			Application.LoadLevel("World");
		}
	}
}