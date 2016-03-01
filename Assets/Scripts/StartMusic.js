#pragma strict

	var Music : GameObject;
	public var i : int = 0;
	public var volume : float = 1f;

function Start () {

	Music = GameObject.Find("MusicPlayer");
	if(Music != null)
	{
		Music.GetComponent.<MusicPlayer>().PlayTrack(i, volume);
	}
	else Debug.Log("NULL");
}
