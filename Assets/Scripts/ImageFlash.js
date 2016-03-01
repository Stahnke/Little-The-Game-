#pragma strict
import UnityEngine.UI;

public var waitTime = 0.5;	

function Start() {
	GetComponent.<Image>().color.a = 0f;;
	Accept();
}

function Accept () {

	StopCoroutine("Flash");
    StartCoroutine("Flash");

}

function Flash () {

		GetComponent.<Image>().color.a = 1f;
		yield WaitForSeconds(waitTime);
		GetComponent.<Image>().color.a = 0f;
		yield WaitForSeconds(waitTime);
		Accept();
}