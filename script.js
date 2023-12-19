// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START - splitBill

SET variabel summa = användarinput nummer
SET variabel vänner = användarinput nummer
SET variabel dricks = användarinput nummer med decimal

IF summa är under 1
    PRINT "Ogiltigt nummer".
END IF

IF vänner är under 1
    PRINT "Ogiltigt nummer".
END IF

IF dricks är under 0
    PRINT "Ogiltigt nummer. Skriv dricks i decimalform t.ex. 0.10 för 10%".
END IF

//här är uträkningen://
SET variabel attBetala = summa * (1 + dricks)
SET variabel prisPerVän = attBetala / vänner

PRINT "Varje kompis ska betala:" + prisPerVän

END
*/




// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
    SET variabel loop till true

    WHILE loop // går så länge spelet är igång tills slutOrd uppnåtts.   
        SET variabel gissning = användarinput;

        IF gissning innehåller 4 bokstäver så:
            IF gissning finns i ordbok så:
                IF isOneLetterApart(startOrd, gissning) så:
                    SET startOrd = gissning; //uppdatera startOrd till det senaste giltiga ordet
                    IF startOrd = slutOrd så: 
                        SET loop till false; // Avsluta loopen om slutOrd är uppnått
                        PRINT "Du lyckades!";
                    ELSE 
                        PRINT "Bra jobbat! Fortsätt till nästa ord..."
                    END IF
                ELSE
                    PRINT "Tyvärr... testa med ett annat ord!"
                END IF
            ELSE 
                PRINT "Hur går det med engelskan? Testa ett ord som finns i det engelska språket!"
            END IF
        ELSE 
            PRINT "Ditt ord måste innehålla 4 bokstäver!";
        END IF
    END WHILE
END FUNCTION


FUNCTION isOneLetterApart(wordOne, wordTwo) 
    SET variabel diffCount till 0;

    FOR varje bokstav i wordOne och motsvarande bokstav i wordTwo gör:
        IF en bokstav i index wordTwo är ändrat till en annan bokstav jämfört med index wordOne;
            diffcount++;   
        END IF
    END FOR

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION

*/

