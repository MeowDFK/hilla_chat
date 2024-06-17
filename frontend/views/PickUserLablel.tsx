import React, { useState } from 'react';
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { CheckboxGroup } from '@hilla/react-components/CheckboxGroup.js';
import { Select } from '@hilla/react-components/Select.js';
import { RadioButton } from '@hilla/react-components/RadioButton.js';
import { RadioGroup } from '@hilla/react-components/RadioGroup.js';
import { Button } from '@hilla/react-components/Button.js';
import { useNavigate } from 'react-router-dom';


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
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [selectedMovies, setSelectedMovies] = useState<string[]>([]);
    const [selectedFood, setSelectedFood] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleNextClick = () => {
      navigate('../about'); 
    };
    function handleGender(gender:string){

    } 
    function handleAge(gender:string){

    }
    const handleCheckboxChange = (value: string, selectedValues: string[], setSelectedValues: (values: string[]) => void) => {
      setSelectedValues(
        selectedValues.includes(value)
          ? selectedValues.filter((v) => v !== value)
          : [...selectedValues, value]
      );
      console.log(setSelectedValues);
    };
    return (
      <div className="flex flex-col h-full items-center justify-center p-l box-border" style={{ textAlign: 'left' }}>
      <Select label="MBTI" placeholder="Choose your MBTI" items={items} />
      <div style={{ marginTop: '5px', fontSize: '14px' }}>
        <a href="https://www.16personalities.com/" target="_blank" rel="noopener noreferrer">
          Haven't tested your MBTI?
        </a>
      </div>

      <RadioGroup label="Gender">
      <RadioButton value="male" label="Male" onCheckedChanged={()=>handleGender("Male")}/>
      <RadioButton value="female" label="Female" onCheckedChanged={()=>handleGender("Female")}/>
      </RadioGroup>
      
      <RadioGroup label="Ages">
      <RadioButton value="young" label="15 - 20"  onCheckedChanged={()=>handleAge("15 - 20")}/>
      <RadioButton value="adult" label="21 - 30"  onCheckedChanged={()=>handleAge("21 - 30")}/>
      <RadioButton value="old" label="31 - 40"    onCheckedChanged={()=>handleAge("31 - 40")}/>
      <RadioButton value="elder" label="41 - 50"  onCheckedChanged={()=>handleAge("41 - 50")}/>
      <RadioButton value="other" label="Others"   onCheckedChanged={()=>handleAge("Others")}/>
      </RadioGroup>
    
      <CheckboxGroup label="Sports">
        <Checkbox
          value="basketball"
          label="Basketball"
          checked={selectedSports.includes('basketball')}
          onCheckedChanged={() => handleCheckboxChange('basketball', selectedSports, setSelectedSports)}
        />
        <Checkbox
          value="baseball"
          label="Baseball"
          checked={selectedSports.includes('baseball')}
          onCheckedChanged={() => handleCheckboxChange('baseball', selectedSports, setSelectedSports)}
        />
        <Checkbox
          value="volleyball"
          label="Volleyball"
          checked={selectedSports.includes('volleyball')}
          onCheckedChanged={() => handleCheckboxChange('volleyball', selectedSports, setSelectedSports)}
        />
        <Checkbox
          value="soccer"
          label="Soccer"
          checked={selectedSports.includes('soccer')}
          onCheckedChanged={() => handleCheckboxChange('soccer', selectedSports, setSelectedSports)}
        />
        <Checkbox
          value="badminton"
          label="Badminton"
          checked={selectedSports.includes('badminton')}
          onCheckedChanged={() => handleCheckboxChange('badminton', selectedSports, setSelectedSports)}
        />
        <Checkbox
          value="swimming"
          label="Swimming"
          checked={selectedSports.includes('swimming')}
          onCheckedChanged={() => handleCheckboxChange('swimming', selectedSports, setSelectedSports)}
        />
      </CheckboxGroup>

      <CheckboxGroup label="Movies">
        <Checkbox
          value="action"
          label="Action"
          checked={selectedMovies.includes('action')}
          onCheckedChanged={() => handleCheckboxChange('action', selectedMovies, setSelectedMovies)}
        />
        <Checkbox
          value="comedy"
          label="Comedy"
          checked={selectedMovies.includes('comedy')}
          onCheckedChanged={() => handleCheckboxChange('comedy', selectedMovies, setSelectedMovies)}
        />
        <Checkbox
          value="drama"
          label="Drama"
          checked={selectedMovies.includes('drama')}
          onCheckedChanged={() => handleCheckboxChange('drama', selectedMovies, setSelectedMovies)}
        />
        <Checkbox
          value="horror"
          label="Horror"
          checked={selectedMovies.includes('horror')}
          onCheckedChanged={() => handleCheckboxChange('horror', selectedMovies, setSelectedMovies)}
        />
        <Checkbox
          value="sci-fi"
          label="Science Fiction (Sci-Fi)"
          checked={selectedMovies.includes('sci-fi')}
          onCheckedChanged={() => handleCheckboxChange('sci-fi', selectedMovies, setSelectedMovies)}
        />
        <Checkbox
          value="others"
          label="Others"
          checked={selectedMovies.includes('others')}
          onCheckedChanged={() => handleCheckboxChange('others', selectedMovies, setSelectedMovies)}
        />
      </CheckboxGroup>

      <CheckboxGroup label="Food">
        <Checkbox
          value="hotpot"
          label="Hot Pot"
          checked={selectedFood.includes('hotpot')}
          onCheckedChanged={() => handleCheckboxChange('hotpot', selectedFood, setSelectedFood)}
        />
        <Checkbox
          value="barbecue"
          label="Barbecue"
          checked={selectedFood.includes('barbecue')}
          onCheckedChanged={() => handleCheckboxChange('barbecue', selectedFood, setSelectedFood)}
        />
        <Checkbox
          value="japanese"
          label="Japanese Cuisine"
          checked={selectedFood.includes('japanese')}
          onCheckedChanged={() => handleCheckboxChange('japanese', selectedFood, setSelectedFood)}
        />
        <Checkbox
          value="thai"
          label="Thai Cuisine"
          checked={selectedFood.includes('thai')}
          onCheckedChanged={() => handleCheckboxChange('thai', selectedFood, setSelectedFood)}
        />
        <Checkbox
          value="italian"
          label="Italian Cuisine"
          checked={selectedFood.includes('italian')}
          onCheckedChanged={() => handleCheckboxChange('italian', selectedFood, setSelectedFood)}
        />
      </CheckboxGroup>

      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <Button onClick={handleNextClick}>Next</Button>
      </div>
      
      </div>
    );
  }