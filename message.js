// Message functionality for Nicole's Music Player

const messageText = `Happy Birthday, Nicole!

Gusto ko lang gumawa ng long sweet 
message para sayo ngayong birthday mo. 
Kilala na kita since 1st sem ngayong 
3rd year kasi ikaw yung president ng SSC, 
tapos nagkakausap lang tayo 
minsan kapag nagkakabiruan. 
Pero naging close talaga tayo nitong 
2nd sem nung na-cute-an ka 
dun sa officer na tropa ko HAHAHA.

Natatawa pa rin ako pag naaalala ko yung 
unang beses na binilhan kita ng McDo 
chicken with fries tsaka yung Oreo McFlurry. 
Peace offering ko sayo yun kasi may 
kasalanan ako noon eh. 
Tapos nung nagkasakit ka nitong 2nd sem, 
pinuntahan kita sa dorm mo dala yung same 
order na yun, at doon ko na din nalaman 
kung saan yung dorm mo. Dahil din sayo naging 
close ko sila Fernan at Johann, tapos nadagdag 
pa sila Leroi at Jaira. Ang saya nung mga times na 
sinasabayan ka namin pauwi sa dorm, tapos yung 
pagtambay ko ng mga 4-5 times sa inyo tsaka 
sa court malapit sa inyo sa Brixton.

Hinding hindi ko rin makakalimutan yung time nung 
election day ng bagong set of SSC. Tumambay tayo 
sa dorm niyo tapos ginabi ako, inabot na ng 12 
midnight kaya wala na akong masakyan pauwi! 
Napilitan tuloy akong magpasundo kay kuya 
galing pa siyang San Juan hanggang Lipa, eh 
taga San Juan din naman ako HAHAHA.

Pero ayun, enough with that story. 
Gusto ko lang na mag-enjoy ka nang 
sobra sa birthday mo. Palagi ka sanang 
magpapahinga kapag may free time ka 
kasi alam kong nakakapagod din mga 
ginagawa mo. Kapag may kailangan 
kang help, magsabi ka lang agad. 
Kapag may problema ka tapos di mo 
man kayang sabihin agad sakin or 
sa iba nating tropa, always 
remember na pwede mo akong tawagan. 
Kapag kailangan mo din ng kasama sa 
Discord or mag ML, chat ka lang. 
Wag kang mahihiya sakin kasi 
alam mo namang walanghiya 
akong tao HAHAHA.

Mag-iingat ka palagi. 
And kapag dumating yung time na 
magka-boyfriend ka na, full 
support lang kami sayo. 
Never ka namin papabayaan 
kahit ano pang maging problema mo—sa sarili, 
sa fam, sa friends, o kahit pa dyan sa 
taong magiging boyfriend mo. Nandito 
lang kami palagi.

To end this message, gusto ko 
lang i-share sayo itong mga 
Bible verses para ma-inspire 
ka palagi in life:

Ecclesiastes 3:11 (NIV)
"He has made everything beautiful in its time. 
He has also set eternity in the human heart; 
yet no one can fathom what God has done from 
beginning to end."

Psalm 20:4 (NIV)
"May he give you the desire of 
your heart and make all your plans succeed."

John 15:11 (NIV)
"I have told you this so that 
my joy may be in you and that your joy may be complete."

Jeremiah 29:11 (NIV)
"For I know the plans I have for you," 
declares the Lord, "plans to prosper you 
and not to harm you, plans to give you hope and a future."

Happy Birthday ulit, Nicole!`;

// Initialize message button functionality
function initMessage() {
    const messageBtn = document.getElementById('message-btn');
    const messageModal = document.getElementById('message-modal');
    const closeBtn = document.getElementById('message-modal-close');
    const messageContent = document.getElementById('message-content');
    
    if (messageBtn && messageModal && closeBtn && messageContent) {
        messageBtn.addEventListener('click', () => {
            messageContent.textContent = messageText;
            messageModal.classList.remove('hidden');
        });
        
        closeBtn.addEventListener('click', () => {
            messageModal.classList.add('hidden');
        });
        
        // Close when clicking outside the content (on the backdrop)
        messageModal.addEventListener('click', (e) => {
            if (e.target === messageModal) {
                messageModal.classList.add('hidden');
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initMessage);