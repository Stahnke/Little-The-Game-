import UnityEngine.UI;
    
    private var skip = 0;
    private var i = 0;
    private var j = 0;
  
    public var letterPause = 0.0175;
    public var linePause = 0.4;
    public var sound : AudioClip;
    public var sound2 : AudioClip;
    public var sound3 : AudioClip;
    public var textValue : GameObject[];
    public var imageValue : GameObject[];
    public var OtherSprite1 : Sprite;
    public var OtherSprite2 : Sprite;
    public var Cinematic : int = 100;
    public var ContinueButton : boolean = false;
    public var TextAddFlash : boolean = false;
    public var TypeAndDelete : boolean = false;
    public var TextTag : int = 0;
    public var LoadingTextObject : GameObject;
   
    private var message : String[]; 
    function Start () {
    
    //InitiateTexts
    if(TypeAndDelete == false)
	TypeText();
    }
    
    function TypeText () {
    
    	i = 0;
    	message = new String[textValue.Length];
    	var h = 0;
    	for(h = 0; h < textValue.Length; h++)
    	{
    		message[h] = textValue[h].GetComponent.<Text>().text;
    	}
    
    	Debug.Log(textValue.Length);
    	while (i < textValue.Length)
    	{
    		for (var letter in message[i].ToCharArray())
    		{
    			Debug.Log("DID IT");
    			textValue[i].GetComponent.<Text>().text += "█";
    			yield WaitForSeconds(letterPause);
   				textValue[i].GetComponent.<Text>().text = 
   					textValue[i].GetComponent.<Text>().text.Substring(0, textValue[i].GetComponent.<Text>().text.Length - 1);
   				textValue[i].GetComponent.<Text>().text = 
   					textValue[i].GetComponent.<Text>().text.Substring(0, textValue[i].GetComponent.<Text>().text.Length - 1);
    			
    			Debug.Log(letter);
    			if (sound)
    			{
 	   				if((letter.ToString() != " " || letter.ToString() != '\n') && skip%2 == 0)
 	   				{
 	   					if(sound != null)
    					GetComponent.<AudioSource>().PlayOneShot (sound);
    					Debug.Log("SOUND");
    				}
    			}
    			skip++;
    			yield WaitForSeconds (letterPause);
    			if(letter.ToString() == '\n')
    				yield WaitForSeconds(linePause);
    		}
    		if(sound2 != null)
    		GetComponent.<AudioSource>().PlayOneShot (sound2);
    		yield WaitForSeconds(linePause);
    		i++;
    	}
    	if(sound3 != null)
    	GetComponent.<AudioSource>().PlayOneShot (sound3);
    	EndOptions();
    }
    
    function EndOptions(){
    
    	if(TextTag == 13)
    	{	
    		var Music : GameObject = GameObject.Find("MusicPlayer");
			if(Music != null)
			Music.GetComponent.<MusicPlayer>().StopTrack();
			else Debug.Log("NULL");
    		LoadingTextObject.SetActive(false);
    		yield WaitForSeconds(3);
    		Application.LoadLevel("Title");
    	}
    }