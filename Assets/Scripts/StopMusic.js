#pragma strict

	var Music : GameObject;

function Start () {

	Music = GameObject.Find("MusicPlayer");
	if(Music != null)
	Music.GetComponent.<MusicPlayer>().StopTrack();
	else Debug.Log("NULL");
}
