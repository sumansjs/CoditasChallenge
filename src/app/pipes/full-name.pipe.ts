import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullName'
})

export class FullNamePipe implements PipeTransform {
    transform(userId: string, userData?: any) {
        if (userData) {
            for (const data of userData) {
                if (data.id === userId) {
                    if (data.name === null) {
                        return 'N/A';
                    }
                    return data.name;
                }
            }
        }
    }
}
