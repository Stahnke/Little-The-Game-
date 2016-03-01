#pragma strict

var Dialogue : Dialogue_Type[];
var DialogueObject : GameObject[];
var i : int;
var volume : float;

function Start () {

	DialogueObject[0].SetActive(true);
	Dialogue[0].StartingMethod();

}

function DialogueNext(DialogueNumber : int){

	if(DialogueNumber == 6)
	{
		var Music : GameObject = GameObject.Find("MusicPlayer");
		if(Music != null)
		{
			Music.GetComponent.<MusicPlayer>().PlayTrack(i, volume);
		}
	}
	if(DialogueNumber < Dialogue.Length)
	{
		DialogueObject[DialogueNumber].SetActive(true);
		Dialogue[DialogueNumber].StartingMethod();
	}
	else
	{
		DialogueObject[DialogueNumber].SetActive(true);
	}
	

}