#pragma strict
public var Track : AudioClip[];
public var TrackName : GameObject[];
private var i : int = 0;
private var k : int = 0;

public var MoveDistance : float = 100;

function Start(){

	PlayTrack(0, 100);
}

function PlayTrack(t : int, v : float){

	GetComponent.<AudioSource>().volume = v;
	GetComponent.<AudioSource>().clip = Track[t];
	GetComponent.<AudioSource>().Play();
	
	TrackName[t].SetActive(true);
	
	for(k = 0; k < MoveDistance; k++)
	{
		TrackName[t].transform.localPosition.x += (1.5f);
		yield WaitForSeconds(0.001f);
	}
	yield WaitForSeconds(2);
		for(k = 0; k < MoveDistance; k++)
	{
		TrackName[t].transform.localPosition.x -= (1.5f);
		yield WaitForSeconds(0.001f);
	}
	
	TrackName[t].SetActive(false);

	
}

function QuietTrack(){

	i = 0;
	for(i = 0; i < 70; i++)
	{
		if(GetComponent.<AudioSource>().volume > 0);
		GetComponent.<AudioSource>().volume -= 0.01f;
		yield WaitForSeconds(0.05f);
	}
}

function StopTrack(){
	Debug.Log("STOPPED TRACK");
	i = 0;
	for(i = 0; i < 100; i++)
	{
		if(GetComponent.<AudioSource>().volume > 0);
		GetComponent.<AudioSource>().volume -= 0.01f;
		yield WaitForSeconds(0.05f);
	}


}