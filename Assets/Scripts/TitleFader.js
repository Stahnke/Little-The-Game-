#pragma strict

var w : int = 0;
var i : int = 0;
var AllObjects : GameObject[];
var RenderSpeed : float = 100;
var Music : MusicPlayer;

function Start() {

	for(i = 0; i < AllObjects.Length; i++)
	{
			AllObjects[i].GetComponent.<Text>().color.a = 0f;
	}
	i = 0;
	FadeIn();
}


function FadeIn () {

	for(i = 0; i < AllObjects.Length; i++)
	{
		for(w = 0; w < RenderSpeed; w++)
		{
			AllObjects[i].GetComponent.<Text>().color.a += (1 / RenderSpeed);
			yield WaitForSeconds (1 / RenderSpeed);
		}
	}
	FadeOut();
}

function FadeOut() {

	Music.QuietTrack();
	RenderSpeed = 80;
	for(w = 0; w < RenderSpeed; w++)
	{
		for(i = 0; i < AllObjects.Length; i++)
		{
			AllObjects[i].GetComponent.<Text>().color.a -= (1 / RenderSpeed);
			yield WaitForSeconds (1 / RenderSpeed);
		}
	}
	yield WaitForSeconds(2);
	Application.LoadLevel("Cinematic 0");


}