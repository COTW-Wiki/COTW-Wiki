import os

file_path = 'COTW Wiki/src/pages/Home/Home.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_line = -1
end_line = -1

start_marker = '      <section className="mt-8 w-full">\n'
start_marker_2 = '        <div className="max-w-3xl mx-auto px-4">\n'
start_marker_3 = '          <h3 className="text-xl font-semibold mb-2">Animals</h3>\n'

end_marker = '      </section>\n'
end_marker_prev = '        </div>\n'
end_marker_prev_2 = '          </table>\n'

for i, line in enumerate(lines):
    if line == start_marker and lines[i+1] == start_marker_2 and lines[i+2] == start_marker_3:
        start_line = i
    
    if line == end_marker and lines[i-1] == end_marker_prev and lines[i-2] == end_marker_prev_2:
        end_line = i

if start_line != -1 and end_line != -1:
    print(f"Found block from line {start_line+1} to {end_line+1}")
    
    # Keep lines before start_line
    new_lines = lines[:start_line]
    
    # Insert component
    new_lines.append('      <AnimalsTable />\n')
    
    # Keep lines after end_line
    new_lines.extend(lines[end_line+1:])
    
    # Add import
    import_line = "import AnimalsTable from '../../components/AnimalsTable';\n"
    # Find last import
    last_import_idx = 0
    for i, line in enumerate(new_lines):
        if line.startswith('import '):
            last_import_idx = i
    
    new_lines.insert(last_import_idx + 1, import_line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Successfully refactored Home.jsx")
else:
    print("Could not find the table block")
    print(f"Start line: {start_line}")
    print(f"End line: {end_line}")
