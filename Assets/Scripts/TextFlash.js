#pragma strict
import UnityEngine.UI;

public var waitTime = 0.5;	
private var message : String;

function Start() {
	message = GetComponent.<Text>().text;
	GetComponent.<Text>().text = "";
	Accept();
}

function Accept () {

	GetComponent.<Text>().text = message;
	StopCoroutine("Flash");
    StartCoroutine("Flash");

}

function Flash () {

		GetComponent.<Text>().text = "";
		yield WaitForSeconds(waitTime);
		GetComponent.<Text>().text = message;
		yield WaitForSeconds(waitTime);
		Accept();
}