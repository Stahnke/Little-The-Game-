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
    public var TextAddFlash : boolean = false;
    public var LoadingText : boolean = false;
    public var FadeTime : float = 0.01;
    private var linePausetemp : float = 0;
    public var TypeAndDelete : boolean = false;
   
    private var message : String[]; 
    function Start () {
    
    //IniaiteImages
    NoImages();
    //InitiateTexts
    message = new String[textValue.Length];
    var h = 0;
    for(h = 0; h < textValue.Length; h++)
    {
    	message[h] = textValue[h].GetComponent.<Text>().text;
    	textValue[h].GetComponent.<Text>().text = "";
    }
	TypeText();
    }
    
    function TypeText () {
    
    	Debug.Log("i = " + i + " textLength = " + "textValue.Length");
    	while (i < textValue.Length)
    	{
    		UnfadeImages();
    		ImageChanger();
    		for (var letter in message[i].ToCharArray())
    		{
    			textValue[i].GetComponent.<Text>().text += "█";
    			yield WaitForSeconds(letterPause);
   				textValue[i].GetComponent.<Text>().text = textValue[i].GetComponent.<Text>().text.Substring(0, textValue[i].GetComponent.<Text>().text.Length - 1);
    			textValue[i].GetComponent.<Text>().text += letter;
    			
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
    		FadeImages();
    		OtherOptions();
    		yield WaitForSeconds(linePause);
    		i++;
    	}
    	if(sound3 != null)
    	GetComponent.<AudioSource>().PlayOneShot (sound3);
    	NoImages();
    	EndOptions();
    	
    }
    
    function NoImages()
    {
       	var w = 0;
    	for(w = 0; w < imageValue.Length; w++)
    	{
    		if(w != 2 && w != 5)
    		imageValue[w].GetComponent.<Image>().color.a = 0f;
    		else
    		imageValue[w].GetComponent.<Text>().color.a = 0f;
    	}
    }
    
    function FadeImages()
    {
    	if(Cinematic == 1)
    	{
    		if(imageValue[j] != null)
  			imageValue[j].GetComponent.<Image>().color.a = 0.2f;
  			if(imageValue[j+1] != null)
   			imageValue[j+1].GetComponent.<Image>().color.a = 0.2f;
   			if(imageValue[j+2] != null)
   			imageValue[j+2].GetComponent.<Text>().color.a = 0.2f;
   		
   			if(j < 3)
   			j+=3;
   			else
   			j = 0;
   		}
    }
    
    function UnfadeImages()
    {
    	if(Cinematic == 1)
    	{
    		
    		if(imageValue[j] != null)
  			imageValue[j].GetComponent.<Image>().color.a = 1f;
  			if(imageValue[j+1] != null)
   			imageValue[j+1].GetComponent.<Image>().color.a = 1f;
   			if(imageValue[j+2] != null)
   			imageValue[j+2].GetComponent.<Text>().color.a = 1f;
   		}
    }
    
    function ImageChanger()
    {
    	if(Cinematic == 1)
    	{
    	  	if(i == 3)
   			{
   				if(imageValue[j] != null && OtherSprite1 != null)
   				imageValue[j].GetComponent.<Image>().sprite = OtherSprite1;
   			}
   		
   			if(i == 5)
   			{
   				if(imageValue[j] != null && OtherSprite2 != null)
   				imageValue[j].GetComponent.<Image>().sprite = OtherSprite2;
   			}
    	}
    }
    
    function OtherOptions()
    {
    	if(i == 0 && TextAddFlash == true)
    	{
    		gameObject.GetComponent.<TextAddFlash>().Accept();	
    	}
    	
    	if(Cinematic == 100 && i == 2)
    	{
    		textValue[2].GetComponent.<TextAddFlash>().Accept();
    	}
    	
    	if(Cinematic == 98 && i == 0)
    	{
    		Debug.Log("LOADING LINKPORT.0");
    		linePausetemp = linePause;
    		linePause = 3;
    		yield WaitForSeconds(1);
    		linePause = linePausetemp;
    	}
    	
    	if(Cinematic == 99 && i == 0)
    	{
    		Debug.Log("LOADING VWORLD");
    		linePausetemp = linePause;
    		linePause = 13;
    		yield WaitForSeconds(1);
    		linePause = linePausetemp;
    	}
    	
    }
    
    function EndOptions()
    {
    	Debug.Log("END OPTIONS");
    	
    	if(TypeAndDelete)
    		gameObject.GetComponent.<AutoDelete>().TypeText();
        if(Cinematic == 1)
    		GameObject.Find("Text_Enter").SendMessageUpwards("Accept");
		if(Cinematic == 99)
		{
			yield WaitForSeconds(0.5);
			textValue[1].SetActive(false);
			gameObject.SetActive(false);
		}
    	if(Cinematic == 100)
    	{
    		while(true)
    		{
    			if(Input.GetKeyDown(KeyCode.Space))
    			{
    				var k : int = 0;
    				for(k = 0; k < 100; k++)
    				{
						for(i = 0; i < textValue.Length; i++)
    						textValue[i].GetComponent.<Text>().color.a -= 0.01f;
    					yield WaitForSeconds(FadeTime);
    				}
    				Application.LoadLevel("Cinematic 1");
    			}
    			yield WaitForSeconds(0.01);
    		}
    	}
    	
    }