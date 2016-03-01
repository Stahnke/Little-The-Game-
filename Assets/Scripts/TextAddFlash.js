#pragma strict
import UnityEngine.UI;

public var waitTime = 0.5;	
private var message : String;
private var continue_able = false;
public var Cinematic : int = 0;

function Accept () {

	continue_able = true;
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
	
	if(Input.GetKeyDown(KeyCode.Space) && continue_able == true)
	{	
		if(Cinematic == 0)
		{}
		if(Cinematic == 1)
		{	
		Debug.Log("SPACE!");
		Application.LoadLevel("Scene1");
		}
	}
}