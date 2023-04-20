import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatInstructions'
})
export class FormatInstructionsPipe implements PipeTransform {
  transform(instructions: string): string {
    // Supprime les points et les deux-points
    instructions = instructions.replace(/[.:]/g, '');
    // Sépare les instructions par saut de ligne
    const steps = instructions.split('\r\n');
    // Supprime les instructions vides
    const filteredSteps = steps.filter(step => step.trim() !== '');
    // Retourne les étapes formatées avec une police personnalisée et les balises de liste
    const formattedSteps = filteredSteps.map((step, index) => `<li style="font-family: Arial, sans-serif"><strong class="text-yellow-500">Etape ${index + 1} : </strong> ${step.trim()}</li>`);
    return `<ul>${formattedSteps.join('')}</ul>`;
  }
}
