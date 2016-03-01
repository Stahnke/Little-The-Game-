import UnityEngine.UI;
    
    private var skip = 0;
    private var a = true;
    private var i = 0;
    private var messageSize = 1;
  
    
    public var letterPause = 0.0175;
    public var linePause = 0.4;
    public var sound : AudioClip;
    public var sound2 : AudioClip;
    public var sound3 : AudioClip;
    public var textValue : GameObject;
    public var TextAddFlash : boolean = false;
    private var linePausetemp : float = 0;
    public var Director : boolean = false;
    public var DirectorObject : Director;
    public var DialogueNumber : int = 0;
    
    public var DialogueObject : GameObject;
   
    private var message : String[];
    private var startMessage : String;
	
    
    function StartingMethod () {
    
    	if(Director != true)
    	GameObject.Find("Player").SendMessageUpwards("StopMovement");
    
    	startMessage = textValue.GetComponent.<Text>().text;
    
    	i = 0;
    	a = true;
    	messageSize = 1;
    	
    	for(var someLetter in startMessage.ToCharArray())
    	{
    		if(someLetter == "\n")
    		{
    			messageSize++;
    		}
    	}
    	
    	message = new String[messageSize];
    
    	for(var someLetter in startMessage.ToCharArray())
    	{
    		message[i] += someLetter;
    		if(someLetter == "\n")
    		{
    			i++;
    		}
    	}
    	i = 0;
		TypeText();
    }
    
    function TypeText () {
    
    		
    		while(i < messageSize)
    		{
    		
    		textValue.GetComponent.<Text>().text = "";
    		for (var letter in message[i].ToCharArray())
    		{
    			textValue.GetComponent.<Text>().text += "█";
    			yield WaitForSeconds(letterPause);
   				textValue.GetComponent.<Text>().text = textValue.GetComponent.<Text>().text.Substring(0, textValue.GetComponent.<Text>().text.Length - 1);
    			textValue.GetComponent.<Text>().text += letter;
    			
    			Debug.Log(letter);
    			if (sound)
    			{
 	   				if((letter.ToString() != " " || letter.ToString() != '\n') && skip%2 == 0)
 	   				{
    					GetComponent.<AudioSource>().PlayOneShot (sound);
    					Debug.Log("SOUND");
    				}
    			}
    			skip++;
    			yield WaitForSeconds (letterPause);
    			if(letter.ToString() == '\n')
    				break;
    		}
    		while(a)
    		{
    			if(Input.GetKeyDown(KeyCode.Space))
    			{
    				a = false;
    			}
    			yield WaitForSeconds(0.001);
    		}
    		a = true;
    		i++;
    		}
    		GetComponent.<AudioSource>().PlayOneShot (sound2);

    		yield WaitForSeconds(linePause);
    		
    		GetComponent.<AudioSource>().PlayOneShot (sound3);
    		
    		if(Director == false)
    		DialogueObject.SetActive(false);
    		
    		textValue.GetComponent.<Text>().text = startMessage;
    		
    		if(Director != true)
    		GameObject.Find("Player").SendMessageUpwards("StartMovement");
    		
    		else if(Director)
    		{
    			DirectorObject.DialogueNext(DialogueNumber+1);
    			DialogueObject.SetActive(false);
    		}
    		
    		
    }
    	