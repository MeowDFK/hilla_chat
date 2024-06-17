//import { ViewConfig } from '@hilla/hilla-file-router/types.js';
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { CheckboxGroup } from '@hilla/react-components/CheckboxGroup.js';
import { Select } from '@hilla/react-components/Select.js';
import { RadioButton } from '@hilla/react-components/RadioButton.js';
import { RadioGroup } from '@hilla/react-components/RadioGroup.js';
import { Button } from '@hilla/react-components/Button.js';
import { useNavigate } from 'react-router-dom';


/*export const config: ViewConfig = {
    menu: { order: 2, icon: 'line-awesome/svg/globe-solid.svg' },
    title: 'Pick Labels',
  };*/

  export default function PickLabelView() {
    const responsiveSteps = [
      { minWidth: '0', columns: 1 },
      { minWidth: '500px', columns: 2 },
    ];
    const items = [
      { label: 'ISTJ - The Inspector', value: 'istj' },
      { label: 'ISFJ - The Protector', value: 'isfj' },
      { label: 'INFJ - The Advocate', value: 'infj' },
      { label: 'INTJ - The Architect', value: 'intj' },
      { label: 'ISTP - The Crafter', value: 'istp' },
      { label: 'ISFP - The Artist', value: 'isfp' },
      { label: 'INFP - The Mediator', value: 'infp' },
      { label: 'INTP - The Thinker', value: 'intp' },
      { label: 'ESTP - The Persuader', value: 'estp' },
      { label: 'ESFP - The Performer', value: 'esfp' },
      { label: 'ENFP - The Champion', value: 'enfp' },
      { label: 'ENTP - The Debater', value: 'entp' },
      { label: 'ESTJ - The Director', value: 'estj' },
      { label: 'ESFJ - The Caregiver', value: 'esfj' },
      { label: 'ENFJ - The Protagonist', value: 'enfj' },
      { label: 'ENTJ - The Commander', value: 'entj' },
    ];

    const navigate = useNavigate();

    const handleNextClick = () => {
      navigate('../about'); 
    };
    
    
    return (
      <div className="flex flex-col h-full items-center justify-center p-l box-border" style={{ textAlign: 'left' }}>
      <Select label="MBTI" placeholder="Choose your MBTI" items={items}/>
      <div style={{ marginTop: '5px', fontSize: '14px' }}>
        <a href="https://www.16personalities.com/" target="_blank" rel="noopener noreferrer">
          Haven't tested your MBTI?
        </a>
      </div>

      <RadioGroup label="Gender">
      <RadioButton value="male" label="Male" />
      <RadioButton value="female" label="Female" />
      </RadioGroup>
      
      <RadioGroup label="Ages">
      <RadioButton value="young" label="15 - 20" />
      <RadioButton value="adult" label="21 - 30" />
      <RadioButton value="old" label="31 - 40" />
      <RadioButton value="elder" label="41 - 50" />
      <RadioButton value="other" label="Others" />
      </RadioGroup>
    
      <CheckboxGroup label="Sports" >
      <Checkbox value="basketball" label="Basketball" />
      <Checkbox value="baseball" label="Baseball" />
      <Checkbox value="volleyball" label="Volleyball" />
      <Checkbox value="soccer" label="Soccer" />
      <Checkbox value="badminton" label="Badminton" />
      <Checkbox value="swimming" label="Swimming" />
      </CheckboxGroup>

      <CheckboxGroup label="Movies" >
      <Checkbox value="action" label="Action" />
      <Checkbox value="Comedy" label="Comedy" />
      <Checkbox value="Drama" label="Drama" />
      <Checkbox value="Horror" label="Horror" />
      <Checkbox value="Science Fiction (Sci-Fi)" label="Science Fiction (Sci-Fi)" />
      <Checkbox value="others" label="Others" />
      </CheckboxGroup>

      <CheckboxGroup label="Food" >
      <Checkbox value="hotpot" label="Hot Pot" />
      <Checkbox value="Barbecue" label="Barbecue" />
      <Checkbox value="Japanese Cuisine" label="Japanese Cuisine" />
      <Checkbox value="Thai Cuisine" label="Thai Cuisine" />
      <Checkbox value="Italian Cuisine" label="Italian Cuisine" />
      </CheckboxGroup>

      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <Button onClick={handleNextClick}>Next</Button>
      </div>
      
      </div>
    );
  }