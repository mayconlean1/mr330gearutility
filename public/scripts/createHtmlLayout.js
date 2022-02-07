function createHtmlLayout(indexLayout, schema={}){
    const layoutBaseSchema = document.querySelector('.layoutBaseSchema')
    layoutBaseSchema.innerHTML = ''

    if(indexLayout === 'layout0'){
        layoutBaseSchema.innerHTML = `
        <div class="schemaGear gearGU">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>

        <div class="schemaGear gearD activeLayout">
            <div class="gearId">
                D
            </div>
            <div class="selectGearCombination">
                ${schema.D?schema.D : '-'}
            </div>
        </div>

        <div class="schemaGear gearF">
            <div class="gearId">
                F
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>

        <div class="schemaGear gearE activeLayout">
            <div class="gearId">
                E
            </div>
            <div class="selectGearCombination">
                ${schema.E?schema.E : '-'}
            </div>
        </div>

        <div class="schemaGear gearGL">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>
        <div class="schemaGear gearL activeLayout">
            <div class="gearId">
                L
            </div>
            <div class="selectGearCombination">
                ${schema.D?schema.L : '-'}
            </div>
        </div>
        `
    }
    else if(indexLayout === 'layout1'){
        layoutBaseSchema.innerHTML = `
        <div class="schemaGear gearGU activeLayout">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                ${schema.G?schema.G : '-'}
            </div>
        </div>

        <div class="schemaGear gearD activeLayout">
            <div class="gearId">
                D
            </div>
            <div class="selectGearCombination">
                ${schema.D?schema.D : '-'}
            </div>
        </div>

        <div class="schemaGear gearF activeLayout">
            <div class="gearId">
                F
            </div>
            <div class="selectGearCombination">
                ${schema.F?schema.F : '-'}
            </div>
        </div>

        <div class="schemaGear gearE ">
            <div class="gearId">
                E
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>

        
        <div class="schemaGear gearL activeLayout">
            <div class="gearId">
                L
            </div>
            <div class="selectGearCombination">
                ${schema.L?schema.L : '-'}
            </div>
        </div>

        <div class="schemaGear gearGL">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>
        `
    }
    else if(indexLayout === 'layout2'){
        layoutBaseSchema.innerHTML = `
        <div class="schemaGear gearGU">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>

        <div class="schemaGear gearD activeLayout">
            <div class="gearId">
                D
            </div>
            <div class="selectGearCombination">
                ${schema.D?schema.D : '-'}
            </div>
        </div>

        <div class="schemaGear gearF activeLayout">
            <div class="gearId">
                F
            </div>
            <div class="selectGearCombination">
                ${schema.F?schema.F : '-'}
            </div>
        </div>

        <div class="schemaGear gearE activeLayout">
            <div class="gearId">
                E
            </div>
            <div class="selectGearCombination">
                ${schema.E?schema.E : '-'}
            </div>
        </div>

        <div class="schemaGear gearL activeLayout">
            <div class="gearId">
                L
            </div>
            <div class="selectGearCombination">
                ${schema.L?schema.L : '-'}
            </div>
        </div>

        <div class="schemaGear gearGL">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>
        `
    }
    else if(indexLayout === 'layout3'){
        layoutBaseSchema.innerHTML = `
        <div class="schemaGear gearGU activeLayout">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                ${schema.G?schema.G : '-'}
            </div>
        </div>

        <div class="schemaGear gearD activeLayout">
            <div class="gearId">
                D
            </div>
            <div class="selectGearCombination">
                ${schema.D?schema.D : '-'}
            </div>
        </div>

        <div class="schemaGear gearF activeLayout">
            <div class="gearId">
                F
            </div>
            <div class="selectGearCombination">
                ${schema.F?schema.F : '-'}
            </div>
        </div>

        <div class="schemaGear gearE activeLayout">
            <div class="gearId">
                E
            </div>
            <div class="selectGearCombination">
                ${schema.E?schema.E : '-'}
            </div>
        </div>

        <div class="schemaGear gearGL">
            <div class="gearId">
                G
            </div>
            <div class="selectGearCombination">
                -
            </div>
        </div>

        <div class="schemaGear gearL activeLayout">
            <div class="gearId">
                L
            </div>
            <div class="selectGearCombination">
                ${schema.L?schema.L : '-'}
            </div>
        </div>
        `
    }

}